/* eslint-disable css-modules/no-undef-class */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Mutation } from 'react-apollo';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import dayPicker from 'react-day-picker/lib/style.css';
import format from 'date-fns/format';
import axios from 'axios';
import path from 'path';

import s from './AddPainting.css';
import addPaintingMutation from './addPaintingMutation.graphql';
import { itemConstants } from './../../constants';

class AddPainting extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    title: '',
    date: '',
    technique: '',
    description: '',
    height: '',
    width: '',
    imagePreviewUrl: '',
    file: '',
  });

  showImage = e => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result,
        file,
      });
    };
    reader.readAsDataURL(file);
  };

  saveImage = (file, title) => {
    const fileName = title + path.extname(file.name);

    const formData = new FormData();

    formData.append('fileName', fileName);
    formData.append('destination', itemConstants.IMAGE_FOLDER.PAINTING);
    formData.append('file', file);
    axios.post('/uploadImage', formData);
  };

  resetState = () => {
    this.setState(this.getInitialState());
  };

  render() {
    return (
      <Mutation
        mutation={addPaintingMutation}
        onCompleted={() => this.resetState()}
      >
        {addPainting => (
          <div className={s.root}>
            <div className={s.container}>
              <h1>{this.props.title}</h1>
              <form
                className="formGroup"
                onSubmit={e => {
                  e.preventDefault();
                  this.saveImage(this.state.file, this.state.title);
                  const painting = {
                    title: this.state.title,
                    date: this.state.date,
                    technique: this.state.technique,
                    description: this.state.description,
                    height: this.state.height,
                    width: this.state.width,
                  };
                  addPainting({ variables: { painting } });
                }}
              >
                <input
                  placeholder="Titre"
                  type="text"
                  value={this.state.title}
                  onChange={e => this.setState({ title: e.target.value })}
                />
                <div className={s.DayInputContainer}>
                  <DayPickerInput
                    selectedDays={this.state.date}
                    onDayChange={newDate =>
                      this.setState({ date: newDate.toLocaleDateString() })
                    }
                    formatDate={format}
                    format={itemConstants.FORMAT_DATE}
                    placeholder="Date"
                  />
                </div>
                <input
                  placeholder="Technique"
                  type="text"
                  value={this.state.technique}
                  onChange={e => this.setState({ technique: e.target.value })}
                />
                <input
                  placeholder="Description"
                  type="text"
                  value={this.state.description}
                  onChange={e => this.setState({ description: e.target.value })}
                />
                <input
                  placeholder="Hauteur (cm)"
                  type="number"
                  value={this.state.height}
                  onChange={e => this.setState({ height: e.target.value })}
                />
                <input
                  placeholder="Largeur (cm)"
                  type="number"
                  value={this.state.width}
                  onChange={e => this.setState({ width: e.target.value })}
                />
                <input
                  placeholder="URL de l'image"
                  type="file"
                  onChange={this.showImage}
                />
                {this.state.file && (
                  <img
                    src={this.state.imagePreviewUrl}
                    alt="Marion Casters"
                    className={s.imagePreview}
                  />
                )}
                {this.state.title &&
                  this.state.date &&
                  this.state.technique &&
                  this.state.height &&
                  this.state.width &&
                  this.state.file && <button type="submit">OK</button>}
              </form>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default withStyles(s, dayPicker)(AddPainting);
