import React from 'react';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './ItemRow.css';
import ItemDeleteButton from '../ItemDelete/ItemDeleteButton';
import ItemUpdateButton from '../ItemUpdate/ItemUpdateButton';
import ItemService from '../../../../app-services/ItemService';

function ItemRow({ item, srcList, type, deleteMutation, updateMutation }) {
  useStyles(s);

  const itemService = new ItemService(type);

  const isSculpture = itemService.getIsSculpture();
  const alt = itemService.getAltImage();
  const src = srcList[0];

  return (
    <tr className={s.row}>
      <th>{item.title}</th>
      <th>{new Date(item.date).toLocaleDateString()}</th>
      <th>{item.technique}</th>
      <th>{item.description}</th>
      <th>{item.height}</th>
      <th>{item.width}</th>
      {isSculpture && <th>{item.length}</th>}
      <th>
        <img src={src} alt={alt} className={s.thumbnail} />
      </th>
      <th>
        <ItemDeleteButton
          id={item.id}
          type={type}
          deleteMutation={deleteMutation}
        />
      </th>
      <th>
        <ItemUpdateButton
          item={item}
          type={type}
          srcList={srcList}
          updateMutation={updateMutation}
        />
      </th>
    </tr>
  );
}

ItemRow.propTypes = {
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
  srcList: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  deleteMutation: PropTypes.func.isRequired,
  updateMutation: PropTypes.func.isRequired,
};

export default ItemRow;
