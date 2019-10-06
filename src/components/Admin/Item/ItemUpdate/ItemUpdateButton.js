import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPen } from 'react-icons/fa';
import withStyles from 'isomorphic-style-loader/withStyles';

import UpdateForm from './UpdateForm/UpdateForm';
import s from './ItemUpdateButton.css';

function ItemUpdateButton({ item, type, srcList, updateMutation }) {
  const [openUpdate, setOpenUpdate] = useState(false);

  const getResult = isError => {
    if (!isError) setOpenUpdate(false);
  };

  const toggle = () => {
    setOpenUpdate(!openUpdate);
  };

  return (
    <>
      <button type="button" onClick={toggle} className={s.command}>
        <FaPen />
      </button>
      {openUpdate && (
        <UpdateForm
          item={item}
          type={type}
          srcList={srcList}
          updateMutation={updateMutation}
          onResult={getResult}
        />
      )}
    </>
  );
}

ItemUpdateButton.propTypes = {
  item: PropTypes.shape().isRequired,
  type: PropTypes.string.isRequired,
  srcList: PropTypes.array.isRequired,
  updateMutation: PropTypes.func.isRequired,
};

export default withStyles(s)(ItemUpdateButton);
