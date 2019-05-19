import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './Item.css';
import ITEM_CONST from '../../../constants/itemConstants';
import Image from '../Image';

class Item extends React.Component {
  static propTypes = {
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

  render() {
    const { item, type } = this.props;

    if (type === ITEM_CONST.TYPE.SCULPTURE) {
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
          <span className={s.noWrap}>
            {item.height} x {item.width} x {item.length} cm
          </span>
        </article>
      );
    }

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
        <span className={s.noWrap}>
          {item.height} x {item.width} cm
        </span>
      </article>
    );
  }
}

export default withStyles(s)(Item);
