import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import ITEM from '../../../../../constants/item';
import s from './UpdateForm.css';

const customStyles = {
  overlay: {
    backgroundColor: 'none',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    maxHeight: '90%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app');

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.item,
      date: new Date(this.props.item.date).toLocaleDateString(),
      imagePreviewUrls: [],
      pictures: [],
      showModal: true,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.constructItem = this.constructItem.bind(this);
  }

  constructItem = () => {
    const { imagePreviewUrls, showModal, id, __typename, ...rest } = this.state;
    return {
      ...rest,
      type: this.props.type,
    };
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    this.props.onResult('', false);
  }

  handleResult(result) {
    const isError = !!result.message;
    this.props.onResult(isError);
    if (!isError) this.setState({ showModal: false });
  }

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
    const { type, srcList } = this.props;
    const { id } = this.props.item;
    const isSculpture = type === ITEM.SCULPTURE.TYPE;

    const haveMain = !!(
      this.state.title &&
      this.state.date &&
      this.state.technique &&
      this.state.height &&
      this.state.width
    );

    const canSubmit =
      (!isSculpture && haveMain) ||
      !!(isSculpture && haveMain && this.state.length);

    const {
      title,
      date,
      technique,
      width,
      length,
      height,
      imagePreviewUrls,
      showModal,
      description,
    } = this.state;

    return (
      <Modal
        id="updateItem"
        contentLabel="Modification"
        closeTimeoutMS={150}
        isOpen={showModal}
        style={customStyles}
      >
        <h1 className={s.updateTitle}>Modification</h1>
        <form
          className="formGroup"
          onSubmit={e => {
            e.preventDefault();
            const item = this.constructItem();
            this.props.updateMutation({ variables: { id, item } }).then(res => {
              this.handleResult(res);
            });
          }}
        >
          <input
            className={s.inputL}
            placeholder="Titre"
            name="title"
            type="text"
            value={title}
            onChange={this.handleInputChange}
          />
          <div className={s.DayInputContainer}>
            <DayPickerInput
              value={date}
              onDayChange={this.handleDayChange}
              formatDate={formatDate}
              parseDate={parseDate}
              format={ITEM.FORMAT_DATE}
              placeholder="Date"
            />
          </div>
          <input
            className={s.inputL}
            placeholder="Technique"
            name="technique"
            type="text"
            value={technique}
            onChange={this.handleInputChange}
          />
          <input
            className={s.inputR}
            placeholder="Description"
            name="description"
            type="text"
            value={description}
            onChange={this.handleInputChange}
          />
          <input
            className={s.inputL}
            placeholder="Hauteur (cm)"
            name="height"
            type="number"
            value={height}
            onChange={this.handleInputChange}
          />
          <input
            className={s.inputR}
            placeholder="Largeur (cm)"
            name="width"
            type="number"
            value={width}
            onChange={this.handleInputChange}
          />
          {isSculpture && (
            <input
              className={s.inputL}
              placeholder="Longueur (cm)"
              name="length"
              type="number"
              value={length}
              onChange={this.handleInputChange}
            />
          )}
          <div className={s.oldImageContainer}>
            {srcList.map(
              url =>
                url !== '' && (
                  <img
                    key={url.toString()}
                    src={url}
                    alt="Oeuvre de Marion Casters"
                    className={s.oldImagePreview}
                  />
                ),
            )}
          </div>
          <input
            type="file"
            accept="image/jpeg, image/jpg"
            onChange={e => this.handleImageChange(e, 0)}
          />
          {isSculpture && (
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
          {imagePreviewUrls.map(
            url =>
              url !== '' && (
                <img
                  key={url.toString()}
                  src={url}
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
          <button
            type="button"
            className={s.updateDialogButton}
            onClick={this.handleCloseModal}
          >
            Annuler
          </button>
        </form>
      </Modal>
    );
  }
}

UpdateForm.propTypes = {
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
  updateMutation: PropTypes.func.isRequired,
  onResult: PropTypes.func.isRequired,
};

export default withStyles(s)(UpdateForm);
