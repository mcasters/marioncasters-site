import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Mutation } from 'react-apollo/index';

import s from './EditPicture.css';
import ADD_PICTURE_MUTATION from '../../../data/graphql/queries/addPictureMutation.graphql';
import Alert from '../../Alert';

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
    const title = 'Image';
    const { pictureTitle } = this.props;
    const { imagePreviewUrl, picture } = this.state;

    return (
      <Mutation mutation={ADD_PICTURE_MUTATION} ssr>
        {(mutation, { error, data }) => (
          <div className={s.addContainer}>
            <h2>{title}</h2>
            <form
              className="formGroup"
              onSubmit={e => {
                e.preventDefault();
                mutation({ variables: { picture, pictureTitle } }).then(res => {
                  if (res) this.setState(this.getInitialState);
                });
              }}
            >
              <input
                type="file"
                accept="image/jpeg, image/jpg"
                onChange={e => this.handleImageChange(e)}
              />
              {imagePreviewUrl !== '' && (
                <img
                  key={imagePreviewUrl.toString()}
                  src={imagePreviewUrl}
                  alt="Sculpture de Marion Casters"
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
