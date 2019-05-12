/* eslint-disable no-restricted-syntax */
/* eslint-disable radix */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Mutation } from 'react-apollo/index';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';

import s from './ItemAdd.css';
import ADD_ITEM_MUTATION from '../../../../data/graphql/queries/addItemMutation.graphql';
import GET_ITEMS_QUERY from '../../../../data/graphql/queries/getAllItems.graphql';
import ITEM_CONSTANTS from '../../../../constants/itemConstants';
import Alert from '../../../Alert';

class ItemAdd extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.isSculpture = this.props.type === ITEM_CONSTANTS.TYPE.SCULPTURE;
    this.state = this.getInitialState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.constructItem = this.constructItem.bind(this);
  }

  getInitialState = () => ({
    title: '',
    date: '',
    technique: '',
    description: '',
    length: 0,
    height: 0,
    width: 0,
    imagePreviewUrls: [],
    pictures: [],
  });

  constructItem = () => {
    const { imagePreviewUrls, ...rest } = this.state;
    return {
      ...rest,
      type: this.props.type,
    };
  };

  handleImageChange(e, index) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    const { imagePreviewUrls, pictures } = this.state;
    reader.onload = () => {
      imagePreviewUrls.splice(index, 1, reader.result);
      pictures.splice(index, 1, file);

      this.setState({ imagePreviewUrls });
      this.setState({ pictures });
    };
    reader.readAsDataURL(file);
  }

  handleInputChange(e) {
    e.preventDefault();

    const { value, name, type } = e.target;

    this.setState({ [name]: type === 'number' ? parseInt(value, 10) : value });
  }

  handleDayChange(selectedDay) {
    this.setState({ date: selectedDay });
  }

  render() {
    const title = 'Ajout';
    const { type } = this.props;

    const haveMain =
      this.state.title &&
      this.state.date &&
      this.state.technique &&
      this.state.height > 0 &&
      this.state.width > 0;
    const canSubmit =
      (!this.isSculpture && haveMain && this.state.pictures.length === 1) ||
      (this.isSculpture &&
        haveMain &&
        this.state.length > 0 &&
        this.state.pictures.length === 4);

    return (
      <Mutation
        mutation={ADD_ITEM_MUTATION}
        update={(cache, { data: { addItem } }) => {
          const { getAllItems } = cache.readQuery({
            query: GET_ITEMS_QUERY,
            variables: {
              type,
            },
          });
          cache.writeQuery({
            query: GET_ITEMS_QUERY,
            variables: {
              type,
            },
            data: { getAllItems: [...getAllItems, addItem] },
          });
        }}
        ssr
      >
        {(mutation, { error, data }) => (
          <div className={s.addContainer}>
            <h2>{title}</h2>
            <form
              className="formGroup"
              onSubmit={e => {
                e.preventDefault();
                const item = this.constructItem();
                mutation({ variables: { item } }).then(res => {
                  if (res) this.setState(this.getInitialState);
                });
              }}
            >
              <input
                className={s.inputL}
                placeholder="Titre"
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
              <div className={s.DayInputContainer}>
                <DayPickerInput
                  value={this.state.date}
                  onDayChange={this.handleDayChange}
                  formatDate={formatDate}
                  parseDate={parseDate}
                  format={ITEM_CONSTANTS.FORMAT_DATE}
                  placeholder="Date"
                />
              </div>
              <input
                className={s.inputL}
                placeholder="Technique"
                name="technique"
                type="text"
                value={this.state.technique}
                onChange={this.handleInputChange}
              />
              <input
                className={s.inputR}
                placeholder="Description"
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
              <input
                className={s.inputL}
                placeholder="Hauteur (cm)"
                name="height"
                type="number"
                value={this.state.height}
                onChange={this.handleInputChange}
              />
              <input
                className={s.inputR}
                placeholder="Largeur (cm)"
                name="width"
                type="number"
                value={this.state.width}
                onChange={this.handleInputChange}
              />
              {this.isSculpture && (
                <input
                  className={s.inputL}
                  placeholder="Longueur (cm)"
                  name="length"
                  type="number"
                  value={this.state.length}
                  onChange={this.handleInputChange}
                />
              )}
              <input
                type="file"
                accept="image/jpeg, image/jpg"
                onChange={e => this.handleImageChange(e, 0)}
              />
              {this.isSculpture && (
                <div>
                  <input
                    type="file"
                    accept="image/jpeg, image/jpg"
                    onChange={e => this.handleImageChange(e, 1)}
                  />
                  <input
                    type="file"
                    accept="image/jpeg, image/jpg"
                    onChange={e => this.handleImageChange(e, 2)}
                  />
                  <input
                    type="file"
                    accept="image/jpeg, image/jpg"
                    onChange={e => this.handleImageChange(e, 3)}
                  />
                </div>
              )}
              {this.state.imagePreviewUrls.map(
                imagePreviewUrl =>
                  imagePreviewUrl !== '' && (
                    <img
                      key={imagePreviewUrl.toString()}
                      src={imagePreviewUrl}
                      alt="Sculpture de Marion Casters"
                      className={s.imagePreview}
                    />
                  ),
              )}
              {canSubmit && <button type="submit">OK</button>}
            </form>

            {error && <Alert message={error.message} isError />}
            {data && data.addItem && (
              <Alert message="Enregistré" isError={false} />
            )}
          </div>
        )}
      </Mutation>
    );
  }
}

export default withStyles(s)(ItemAdd);
