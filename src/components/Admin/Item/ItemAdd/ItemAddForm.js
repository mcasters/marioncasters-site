import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';

import s from './ItemAddForm.css';
import ITEM from '../../../../constants/item';

const initialState = {
  title: '',
  date: '',
  technique: '',
  description: '',
  length: '',
  height: '',
  width: '',
  pictures: [],
};

function ItemAddForm({ type, addMutation }) {
  const [
    { title, date, technique, description, length, height, width, pictures },
    setState,
  ] = useState(initialState);
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);

  const isSculpture = type === ITEM.SCULPTURE.TYPE;

  const clearState = () => {
    setState({ ...initialState });
    setImagePreviewUrls([]);
  };

  const onChange = e => {
    if (e.target === undefined)
      setState(prevState => ({ ...prevState, date: e }));
    else {
      // eslint-disable-next-line no-shadow
      const { name, value, type } = e.target;
      setState(prevState => ({
        ...prevState,
        [name]: type === 'number' ? parseInt(value, 10) : value,
      }));
    }
  };

  const onImageChange = (e, index) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    const pImagePreviewUrls = imagePreviewUrls;
    const pPictures = pictures;
    reader.onload = () => {
      pImagePreviewUrls.splice(index, 1, reader.result);
      pPictures.splice(index, 1, file);

      setImagePreviewUrls(pImagePreviewUrls);
      setState(prevState => ({ ...prevState, pictures: pPictures }));
    };
    reader.readAsDataURL(file);
  };

  // parseInt(value, 10)
  const titleForm = 'Ajout';
  const haveMain = !!(title && date && technique && height && width);
  const canSubmit =
    (!isSculpture && haveMain && pictures.length === 1) ||
    (isSculpture && haveMain && length && pictures.length === 4);

  function buildInput() {
    const input = {
      title,
      date,
      technique,
      description,
      height,
      width,
      pictures,
      type,
    };
    return isSculpture
      ? {
          ...input,
          length,
        }
      : input;
  }

  return (
    <div className={s.addContainer}>
      <h2>{titleForm}</h2>
      <form
        className="formGroup"
        onSubmit={e => {
          e.preventDefault();
          const input = buildInput();
          addMutation({ variables: { input } }).then(res => {
            if (res) clearState();
          });
        }}
      >
        <input
          className={s.inputL}
          placeholder="Titre"
          name="title"
          type="text"
          value={title}
          onChange={onChange}
        />
        <div className={s.DayInputContainer}>
          <DayPickerInput
            value={date}
            onDayChange={onChange}
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
          onChange={onChange}
        />
        <input
          className={s.inputR}
          placeholder="Description"
          name="description"
          type="text"
          value={description}
          onChange={onChange}
        />
        <input
          className={s.inputL}
          placeholder="Hauteur (cm)"
          name="height"
          type="number"
          value={height}
          onChange={onChange}
        />
        <input
          className={s.inputR}
          placeholder="Largeur (cm)"
          name="width"
          type="number"
          value={width}
          onChange={onChange}
        />
        {isSculpture && (
          <input
            className={s.inputL}
            placeholder="Longueur (cm)"
            name="length"
            type="number"
            value={length}
            onChange={onChange}
          />
        )}
        <input
          type="file"
          accept="image/jpeg, image/jpg"
          onChange={e => onImageChange(e, 0)}
        />
        {isSculpture && (
          <div>
            <input
              type="file"
              accept="image/jpeg, image/jpg"
              onChange={e => onImageChange(e, 1)}
            />
            <input
              type="file"
              accept="image/jpeg, image/jpg"
              onChange={e => onImageChange(e, 2)}
            />
            <input
              type="file"
              accept="image/jpeg, image/jpg"
              onChange={e => onImageChange(e, 3)}
            />
          </div>
        )}
        {imagePreviewUrls.map(
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
    </div>
  );
}

ItemAddForm.propTypes = {
  type: PropTypes.string.isRequired,
  addMutation: PropTypes.func.isRequired,
};

export default withStyles(s)(ItemAddForm);
