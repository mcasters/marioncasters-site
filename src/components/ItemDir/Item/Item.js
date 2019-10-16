import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import Image from '../Image';

import s from './Item.css';
import ITEM_CONST from '../../../constants/itemConstants';

function Item({ item, type }) {
  return (
    <article className={s.itemContainer}>
      <h2 className={s.itemTitle}>{item.title}</h2>
      <Image type={type} title={item.title} />
      <span className={s.noWrap}>
        {new Date(item.date).toLocaleDateString()}
      </span>
      <span className={s.spacer}> | </span>
      <span className={s.noWrap}>{item.technique}</span>
      <span className={s.spacer}> | </span>
      {type === ITEM_CONST.SCULPTURE.TYPE && (
        <span className={s.noWrap}>
          {item.height} x {item.width} x {item.length} cm
        </span>
      )}
      {type !== ITEM_CONST.SCULPTURE.TYPE && (
        <span className={s.noWrap}>
          {item.height} x {item.width} cm
        </span>
      )}
    </article>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    technique: PropTypes.string,
    description: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    length: PropTypes.number,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default withStyles(s)(Item);
