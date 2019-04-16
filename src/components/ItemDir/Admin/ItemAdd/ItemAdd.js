/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Mutation } from 'react-apollo/index';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import dayPicker from 'react-day-picker/lib/style.css';
import { format } from 'date-fns';

import s from './ItemAdd.css';
import ADD_ITEM_MUTATION from './addItemMutation.graphql';
import ITEM_CONSTANTS from '../../../../constants/itemConstants';
import Alert from '../../../Alert';
import PAINTING_QUERY from '../ItemList/getAllPaintings.graphql';
import SCULPTURE_QUERY from '../ItemList/getAllSculptures.graphql';
import DRAWING_QUERY from '../ItemList/getAllDrawings.graphql';

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
    this.complete = this.complete.bind(this);

    if (this.props.type === ITEM_CONSTANTS.TYPE.PAINTING) {
      this.GET_ITEMS_QUERY = PAINTING_QUERY;
      this.queryName = 'getAllPaintings';
    }
    if (this.props.type === ITEM_CONSTANTS.TYPE.SCULPTURE) {
      this.GET_ITEMS_QUERY = SCULPTURE_QUERY;
      this.queryName = 'getAllSculptures';
    }
    if (this.props.type === ITEM_CONSTANTS.TYPE.DRAWING) {
      this.GET_ITEMS_QUERY = DRAWING_QUERY;
      this.queryName = 'getAllDrawings';
    }
  }

  getInitialState = () => ({
    title: '',
    date: '',
    technique: '',
    description: '',
    length: '',
    height: '',
    width: '',
    imagePreviewUrls: ['', '', '', ''],
    files: ['', '', '', ''],
    isComplete: false,
  });

  constructItem = () => {
    const item = {
      pictures: this.state.files,
      type: this.props.type,
      title: this.state.title,
      date: this.state.date,
      technique: this.state.technique,
      description: this.state.description,
      width: this.state.width,
      height: this.state.height,
    };

    return this.isSculpture ? { ...item, length: this.state.length } : item;
  };

  handleImageChange(e, index) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    const imagePreviewUrls = this.state.imagePreviewUrls;
    const files = this.state.files;
    reader.onload = () => {
      imagePreviewUrls.splice(index, 1, reader.result);
      files.splice(index, 1, file);

      this.setState({ imagePreviewUrls });
      this.setState({ files });
    };
    reader.readAsDataURL(file);
  }

  handleInputChange(e) {
    e.preventDefault();

    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleDayChange(selectedDay) {
    this.setState({ date: selectedDay });
  }

  complete = () => {
    this.setState(this.getInitialState());
    this.setState({ isComplete: true });
  };

  render() {
    const title = 'Ajout';
    const isComplete = this.state.isComplete;

    const haveMain =
      this.state.title &&
      this.state.date &&
      this.state.technique &&
      this.state.height &&
      this.state.width &&
      this.state.files.length > 0;
    const canSubmit =
      (!this.isSculpture && haveMain) ||
      (this.isSculpture && haveMain && this.state.length);

    return (
      <Mutation
        mutation={ADD_ITEM_MUTATION}
        update={(cache, { data: { addItem } }) => {
          const { getAllPaintings } = cache.readQuery({
            query: this.GET_ITEMS_QUERY,
          });
          cache.writeQuery({
            query: this.GET_ITEMS_QUERY,
            data: { getAllPaintings: getAllPaintings.concat([addItem]) },
          });
        }}
        ssr
      >
        {(mutation, { error }) => (
          <div className={s.addContainer}>
            <h2>{title}</h2>
            <form
              className="formGroup"
              onSubmit={e => {
                e.preventDefault();
                const item = this.constructItem();
                mutation({ variables: { item } }).then(res => {
                  if (res) this.complete();
                });
              }}
            >
              <input
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
                  dayPickerProps={{ ...this.state.date }}
                  formatDate={format}
                  format={ITEM_CONSTANTS.FORMAT_DATE}
                  placeholder="Date"
                />
              </div>
              <input
                placeholder="Technique"
                name="technique"
                type="text"
                value={this.state.technique}
                onChange={this.handleInputChange}
              />
              <input
                placeholder="Description"
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
              <input
                placeholder="Hauteur (cm)"
                name="height"
                type="number"
                value={this.state.height}
                onChange={this.handleInputChange}
              />
              <input
                placeholder="Largeur (cm)"
                name="width"
                type="text"
                value={this.state.width}
                onChange={this.handleInputChange}
              />
              {this.isSculpture && (
                <input
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

            {error && <Alert message="Erreur GraphQl" isError />}
            {isComplete && <Alert message="Enregistré" isError={false} />}
          </div>
        )}
      </Mutation>
    );
  }
}

export default withStyles(s, dayPicker)(ItemAdd);
