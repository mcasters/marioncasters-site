/* eslint-disable radix */
/* eslint-disable import/no-unresolved */
import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';

import UPDATE_MUTATION from '../../../../data/graphql/queries/updateItemMutation.graphql';
import Alert from '../../../Alert';
import ITEM_CONSTANTS from '../../../../constants/itemConstants';
import GET_ITEMS_QUERY from '../../../../data/graphql/queries/getAllItems.graphql';
import s from './UpdateDialog.css';

const customStyles = {
  overlay: {
    backgroundColor: 'none',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app');

class UpdateDialog extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
      technique: PropTypes.string,
      description: PropTypes.string,
      height: PropTypes.number,
      width: PropTypes.number,
      length: PropTypes.number,
    }).isRequired,
    type: PropTypes.string.isRequired,
    srcList: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      technique: '',
      description: '',
      length: '',
      height: '',
      width: '',
      imagePreviewUrls: ['', '', '', ''],
      files: [],
      showModal: true,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.constructItem = this.constructItem.bind(this);
  }

  constructItem = () => {
    const item = {
      pictures: this.state.files,
      type: this.props.type,
      title: this.state.title,
      date: this.state.date,
      technique: this.state.technique,
      description: this.state.description,
      width: parseInt(this.state.width),
      height: parseInt(this.state.height),
    };

    return this.isSculpture
      ? { ...item, length: parseInt(this.state.length) }
      : item;
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal(e) {
    e.preventDefault();
    this.setState({ showModal: false });
  }

  handleImageChange(e, index) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    const { imagePreviewUrls, files } = this.state;
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

    const { value } = e.target;
    const { name } = e.target;

    this.setState({ [name]: value });
  }

  handleDayChange(selectedDay) {
    this.setState({ date: selectedDay });
  }

  render() {
    const { type } = this.props;

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
        mutation={UPDATE_MUTATION}
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
            data: { getAllItems: getAllItems.concat([addItem]) },
          });
        }}
        onCompleted={data => {
          if (data.updateItem)
            return <Alert message="Mis à jour" isError={false} />;
          return <Alert message="Erreur" isError />;
        }}
        ssr
      >
        {(mutation, { error }) => (
          <Modal
            id="updateItem"
            contentLabel="Modification"
            closeTimeoutMS={150}
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            style={customStyles}
          >
            <h1 className={s.updateTitle}>Modification</h1>
            <form
              className="formGroup"
              onSubmit={e => {
                this.handleCloseModal(e);
                const item = this.constructItem();
                mutation({ variables: { id: this.props.item.id, item } });
              }}
            >
              <input
                className={s.inputL}
                placeholder="Titre"
                name="title"
                type="text"
                value={this.props.item.title}
                onChange={this.handleInputChange}
              />
              <div className={s.DayInputContainer}>
                <DayPickerInput
                  value={this.props.item.date}
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
                value={this.props.item.technique}
                onChange={this.handleInputChange}
              />
              <input
                className={s.inputR}
                placeholder="Description"
                name="description"
                type="text"
                value={this.props.item.description}
                onChange={this.handleInputChange}
              />
              <input
                className={s.inputL}
                placeholder="Hauteur (cm)"
                name="height"
                type="number"
                value={this.props.item.height}
                onChange={this.handleInputChange}
              />
              <input
                className={s.inputR}
                placeholder="Largeur (cm)"
                name="width"
                type="number"
                value={this.props.item.width}
                onChange={this.handleInputChange}
              />
              {this.isSculpture && (
                <input
                  className={s.inputL}
                  placeholder="Longueur (cm)"
                  name="length"
                  type="number"
                  value={this.props.item.length}
                  onChange={this.handleInputChange}
                />
              )}
              {this.props.srcList.map(
                imagePreviewUrl =>
                  imagePreviewUrl !== '' && (
                    <img
                      key={imagePreviewUrl.toString()}
                      src={imagePreviewUrl}
                      alt="Oeuvre de Marion Casters"
                      className={s.oldImagePreview}
                    />
                  ),
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
              {canSubmit && (
                <button className={s.updateDialogButton} type="submit">
                  OK
                </button>
              )}
            </form>

            {error && <Alert message={error} isError />}
          </Modal>
        )}
      </Mutation>
    );
  }
}

export default withStyles(s)(UpdateDialog);
