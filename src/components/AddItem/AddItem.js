/* eslint-disable prefer-destructuring */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Mutation } from 'react-apollo';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import dayPicker from 'react-day-picker/lib/style.css';
import format from 'date-fns/format';
import axios from 'axios';
import path from 'path';

import s from './AddItem.css';
import PAINTING_MUTATION from './addPaintingMutation.graphql';
import SCULPTURE_MUTATION from './addSculptureMutation.graphql';
import DRAWING_MUTATION from './addDrawingMutation.graphql';
import { ITEM_CONSTANTS } from './../../constants';

class AddItem extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.isSculpture = this.props.type === ITEM_CONSTANTS.TYPE.SCULPTURE;
    this.state = this.getInitialState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.getImage = this.getImage.bind(this);
    this.saveImage = this.saveImage.bind(this);
    this.getItem = this.getItem.bind(this);
    this.resetState = this.resetState.bind(this);

    if (this.props.type === 'painting') {
      this.query = PAINTING_MUTATION;
      this.title = 'Peintures';
    }
    if (this.props.type === 'sculpture') {
      this.query = SCULPTURE_MUTATION;
      this.title = 'Scultpures';
    }
    if (this.props.type === 'drawing') {
      this.query = DRAWING_MUTATION;
      this.title = 'Dessins';
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
    imagePreviewUrl: '',
    imagePreviewUrls: ['', '', '', ''],
    files: ['', '', '', ''],
  });

  getImage(e, index) {
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

  getItem = () => {
    const item = {
      title: this.state.title,
      date: this.state.date,
      technique: this.state.technique,
      description: this.state.description,
      width: this.state.width,
      height: this.state.height,
    };
    return this.isSculpture ? { ...item, length: this.state.length } : item;
  };

  saveImage = () => {
    const title = this.state.title;

    if (this.isSculpture) {
      const files = this.state.files;
      let count = 1;
      files.forEach(file => {
        const fileName = `${title}_${count}${path.extname(file.name)}`;

        const formData = new FormData();

        formData.append('fileName', fileName);
        formData.append('type', this.props.type);
        formData.append('file', file);
        axios.post('/uploadImage', formData);
        count += 1;
      });
    } else {
      const file = this.state.files[0];
      const fileName = title + path.extname(file.name);

      const formData = new FormData();

      formData.append('fileName', fileName);
      formData.append('type', this.props.type);
      formData.append('file', file);
      axios.post('/uploadImage', formData);
    }
  };

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  resetState = () => {
    this.setState(this.getInitialState());
  };

  render() {
    const imagePreviewUrls = this.state.imagePreviewUrls;

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
      <Mutation mutation={this.query} onCompleted={() => this.resetState()}>
        {mutation => (
          <div>
            <h1>{this.title}</h1>
            <form
              className="formGroup"
              onSubmit={e => {
                e.preventDefault();
                this.saveImage();
                const item = this.getItem();
                mutation({ variables: { item } });
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
                  selectedDays={this.state.date}
                  onDayChange={e => {
                    this.setState({
                      date: e.toLocaleDateString(),
                    });
                  }}
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
                type="number"
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
                placeholder="Image"
                type="file"
                onChange={e => this.getImage(e, 0)}
              />
              {this.isSculpture && (
                <div>
                  <input
                    placeholder="Image 2"
                    type="file"
                    onChange={e => this.getImage(e, 1)}
                  />
                  <input
                    placeholder="Image 3"
                    type="file"
                    onChange={e => this.getImage(e, 2)}
                  />
                  <input
                    placeholder="Image 4"
                    type="file"
                    onChange={e => this.getImage(e, 3)}
                  />
                </div>
              )}
              {imagePreviewUrls.map(
                imagePreviewUrl =>
                  imagePreviewUrl !== '' && (
                    <img
                      src={imagePreviewUrl}
                      alt="Sculpture de Marion Casters"
                      className={s.imagePreview}
                    />
                  ),
              )}
              {canSubmit && <button type="submit">OK</button>}
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default withStyles(s, dayPicker)(AddItem);
