/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './ItemDeleteButton.css';

function ItemDeleteButton({ id, type, deleteMutation }) {
  useStyles(s);

  return (
    <button
      onClick={e => {
        e.preventDefault();
        deleteMutation({ variables: { id, type } });
      }}
      className={s.command}
      type="button"
    >
      <FaTrash />
    </button>
  );
}

ItemDeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  deleteMutation: PropTypes.func.isRequired,
};

export default ItemDeleteButton;
