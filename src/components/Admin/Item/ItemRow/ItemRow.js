import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/withStyles';

import ITEM_CONSTANTS from '../../../../constants/itemConstants';
import s from './ItemRow.css';
import ItemDeleteButton from '../ItemDelete/ItemDeleteButton';
import ItemUpdateButton from '../ItemUpdate/ItemUpdateButton';

function ItemRow({ item, srcList, type, deleteMutation, updateMutation }) {
  const isSculpture = type === ITEM_CONSTANTS.TYPE.SCULPTURE;

  let alt;
  if (isSculpture) {
    alt = ITEM_CONSTANTS.ALT_IMAGE_SCULPTURE;
  } else {
    alt =
      type === ITEM_CONSTANTS.TYPE.PAINTING
        ? ITEM_CONSTANTS.ALT_IMAGE_PAINTING
        : ITEM_CONSTANTS.ALT_IMAGE_DRAWING;
  }
  const src = srcList[0];

  return (
    <tr className={s.row}>
      <th>{item.title}</th>
      <th>{moment(item.date).format(ITEM_CONSTANTS.FORMAT_DATE)}</th>
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

export default withStyles(s)(ItemRow);
