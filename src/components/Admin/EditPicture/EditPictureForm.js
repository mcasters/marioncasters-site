/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from '@apollo/react-hooks';

import s from './EditPictureForm.css';
import ADD_PICTURE_MUTATION from '../../../data/graphql/queries/addPictureMutation.graphql';
import CONTENT_CONST from '../../../constants/contentConstants';

class EditPictureForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();

    this.handleImageChange = this.handleImageChange.bind(this);
    this.setProps = this.setProps.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  getInitialState = () => ({
    imagePreviewUrl: '',
    file: '',
  });

  setProps = pictureTitle => {
    let adminTitle;
    let filename;
    switch (pictureTitle) {
      case CONTENT_CONST.HOME_IMAGE_PORTRAIT:
        adminTitle = 'Format portrait';
        filename = CONTENT_CONST.HOME_IMAGE_PORTRAIT_FILE;
        break;
      case CONTENT_CONST.HOME_IMAGE_LANDSCAPE:
        adminTitle = 'Format paysage';
        filename = CONTENT_CONST.HOME_IMAGE_LANDSCAPE_FILE;
        break;
      default:
        adminTitle = '';
        filename = CONTENT_CONST.PRESENTATION_IMAGE_FILE;
    }
    return {
      adminTitle,
      filename,
    };
  };

  getResult = () => {
    this.setState(this.getInitialState);
  };

  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = () => {
      this.setState({ imagePreviewUrl: reader.result, file });
    };
    reader.readAsDataURL(file);
  }

  render() {
    const { pictureTitle } = this.props;
    const { adminTitle, filename } = this.setProps(pictureTitle);
    const { imagePreviewUrl, file } = this.state;

    return (
      <div className={s.addContainer}>
        <h2>{adminTitle}</h2>
        <img
          className={s.image}
          src={`${CONTENT_CONST.CONTENT_IMAGE_PATH}/${filename}`}
          alt={
            pictureTitle === CONTENT_CONST.PRESENTATION_IMAGE_TITLE
              ? CONTENT_CONST.PRESENTATION_IMAGE_ALT
              : CONTENT_CONST.HOME_IMAGE_ALT
          }
        />
        <form className="formGroup">
          <label className={s.fileLabel}>
            Choisir un fichier
            <input
              name="add-file"
              className={s.fileButton}
              type="file"
              accept="image/jpg"
              onChange={e => this.handleImageChange(e)}
            />
          </label>
          {imagePreviewUrl !== '' && (
            <img
              key={imagePreviewUrl.toString()}
              src={imagePreviewUrl}
              alt="Oeuvre de Marion Casters"
              className={s.imagePreview}
            />
          )}
          {file && (
            <PictureMutation
              picture={file}
              pictureTitle={pictureTitle}
              onResult={this.getResult}
            />
          )}
        </form>
      </div>
    );
  }
}

function PictureMutation(props) {
  const [addPicture] = useMutation(ADD_PICTURE_MUTATION, {
    variables: {
      picture: props.picture,
      pictureTitle: props.pictureTitle,
    },
    onCompleted() {
      props.onResult();
    },
  });

  return (
    <button onClick={addPicture} type="button">
      OK
    </button>
  );
}

EditPictureForm.propTypes = {
  pictureTitle: PropTypes.string.isRequired,
};

PictureMutation.propTypes = {
  picture: PropTypes.object.isRequired,
  pictureTitle: PropTypes.string.isRequired,
  onResult: PropTypes.func.isRequired,
};

export default withStyles(s)(EditPictureForm);
