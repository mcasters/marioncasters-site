import React from 'react';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';

import Image from '../Image';
import s from './Item.css';
import ITEM from '../../../constants/item';
import GLOBAL_CONSTANTS from '../../../constants/globalConstants';

function Item({ item, type }) {
  useStyles(s);

  const email = GLOBAL_CONSTANTS.EMAIL;

  return (
    <article className={s.itemContainer}>
      <h2 className={s.itemTitle}>{item.title}</h2>
      <Image type={type} title={item.title} />
      <figcaption>
        <time dateTime={item.date} className={s.noWrap}>
          {new Date(item.date).toLocaleDateString()}
        </time>
        <span className={s.spacer}> | </span>
        <p className={s.noWrap}>{item.technique}</p>
        <span className={s.spacer}> | </span>
        <p className={s.noWrap}>
          {item.height} x {item.width}
          {type === ITEM.SCULPTURE.TYPE && ` x ${item.length}`} cm
        </p>
      </figcaption>
      <address className={s.email}>{email}</address>
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

export default Item;
