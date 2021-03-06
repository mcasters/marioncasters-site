/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';
import { useMutation } from '@apollo/react-hooks';

import s from './EditPictureForm.css';
import ADD_PICTURE_MUTATION from '../../../data/graphql/queries/addPictureMutation.graphql';
import CONT_CONST from '../../../constants/content';
import AlertContext from '../../AlertContext';

function EditPictureForm({ pictureTitle }) {
  useStyles(s);
  const triggerAlert = useContext(AlertContext);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [file, setFile] = useState('');

  const [addPicture] = useMutation(ADD_PICTURE_MUTATION, {
    onError(err) {
      triggerAlert(err.message, true);
    },
    onCompleted() {
      triggerAlert('Enregistré', false);
      setImagePreviewUrl('');
      setFile('');
    },
  });

  const setProps = title => {
    let adminTitle;
    let filename;
    switch (title) {
      case CONT_CONST.HOME_IMAGE_PORTRAIT:
        adminTitle = 'Format portrait';
        filename = CONT_CONST.HOME_IMAGE_PORTRAIT_FILE;
        break;
      case CONT_CONST.HOME_IMAGE_LANDSCAPE:
        adminTitle = 'Format paysage';
        filename = CONT_CONST.HOME_IMAGE_LANDSCAPE_FILE;
        break;
      default:
        adminTitle = '';
        filename = CONT_CONST.PRESENTATION_IMAGE_FILE;
    }
    return {
      adminTitle,
      filename,
    };
  };

  const handleImageChange = e => {
    e.preventDefault();

    const reader = new FileReader();
    const f = e.target.files[0];

    reader.onload = () => {
      setImagePreviewUrl(reader.result);
      setFile(f);
    };
    reader.readAsDataURL(f);
  };

  const { adminTitle, filename } = setProps(pictureTitle);

  return (
    <div className={s.addContainer}>
      <h2>{adminTitle}</h2>
      <img
        className={s.image}
        src={`${CONT_CONST.CONTENT_IMAGE_PATH}/${filename}`}
        alt={
          pictureTitle === CONT_CONST.PRESENTATION_IMAGE_TITLE
            ? CONT_CONST.PRESENTATION_IMAGE_ALT
            : CONT_CONST.HOME_IMAGE_ALT
        }
      />
      <form
        className="formGroup"
        onSubmit={e => {
          e.preventDefault();
          addPicture({
            variables: {
              picture: file,
              pictureTitle,
            },
          });
        }}
      >
        <label className={s.fileLabel}>
          Choisir un fichier
          <input
            name="add-file"
            className={s.fileButton}
            type="file"
            accept="image/jpg, image/jpeg"
            onChange={e => handleImageChange(e)}
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
        {file && <button type="submit">OK</button>}
      </form>
    </div>
  );
}

EditPictureForm.propTypes = {
  pictureTitle: PropTypes.string.isRequired,
};

export default EditPictureForm;
