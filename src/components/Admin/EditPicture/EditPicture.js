/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Mutation } from 'react-apollo/index';

import s from './EditPicture.css';
import ADD_PICTURE_MUTATION from '../../../data/graphql/queries/addPictureMutation.graphql';
import Alert from '../../Alert';
import CONTENT_CONST from '../../../constants/contentConstants';

class EditPicture extends React.Component {
  static propTypes = {
    pictureTitle: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState();

    this.handleImageChange = this.handleImageChange.bind(this);
  }

  getInitialState = () => ({
    imagePreviewUrl: '',
    picture: '',
  });

  setProps = pictureTitle => {
    let adminTitle;
    let filename;
    switch (pictureTitle) {
      case CONTENT_CONST.HOME_IMAGE_PORTRAIT:
        adminTitle = 'Format portrait';
        filename = 'home-portrait.jpg';
        break;
      case CONTENT_CONST.HOME_IMAGE_LANDSCAPE:
        adminTitle = 'Format paysage';
        filename = 'home-landscape.jpg';
        break;
      default:
        adminTitle = '';
        filename = 'portrait.jpg';
    }
    return {
      adminTitle,
      filename,
    };
  };

  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = () => {
      this.setState({ imagePreviewUrl: reader.result });
      this.setState({ picture: file });
    };
    reader.readAsDataURL(file);
  }

  render() {
    const { pictureTitle } = this.props;
    const { adminTitle, filename } = this.setProps(pictureTitle);
    const { imagePreviewUrl, picture } = this.state;

    return (
      <Mutation mutation={ADD_PICTURE_MUTATION} ssr>
        {(mutation, { error, data }) => (
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
            <form
              className="formGroup"
              onSubmit={e => {
                e.preventDefault();
                mutation({ variables: { picture, pictureTitle } }).then(res => {
                  if (res) this.setState(this.getInitialState);
                });
              }}
            >
              <label className={s.fileLabel}>
                Choisir un fichier
                <input
                  name="add-file"
                  className={s.fileButton}
                  type="file"
                  accept="image/jpeg, image/jpg, image/png"
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
              <button type="submit">OK</button>
            </form>

            {error && <Alert message={error.message} isError />}
            {data && data.addPicture && (
              <Alert message="Enregistré" isError={false} />
            )}
          </div>
        )}
      </Mutation>
    );
  }
}

export default withStyles(s)(EditPicture);
