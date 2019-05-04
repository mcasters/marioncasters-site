/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/withStyles';

import ITEM_CONSTANTS from '../../../../constants/itemConstants';
import s from './ItemRow.css';
import ItemDelete from '../ItemDelete';

class ItemRow extends React.Component {
  static propTypes = {
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
  };

  constructor(props) {
    super(props);

    this.isSculpture = this.props.type === ITEM_CONSTANTS.TYPE.SCULPTURE;
  }

  render() {
    const { item, srcList, type } = this.props;

    let alt;
    if (this.isSculpture) {
      alt = ITEM_CONSTANTS.ALT_IMAGE_SCULPTURE;
    } else {
      alt =
        type === ITEM_CONSTANTS.TYPE.PAINTING
          ? ITEM_CONSTANTS.ALT_IMAGE_PAINTING
          : ITEM_CONSTANTS.ALT_IMAGE_DRAWING;
    }
    const src = srcList[0];

    return (
      <tr>
        <th>{item.title}</th>
        <th>{moment(item.date).format(ITEM_CONSTANTS.FORMAT_DATE)}</th>
        <th>{item.technique}</th>
        <th>{item.description}</th>
        <th>{item.height}</th>
        <th>{item.width}</th>
        {this.isSculpture && <th>{item.length}</th>}
        <th>
          <img src={src} alt={alt} className={s.thumbnail} />
        </th>
        <th>
          <ItemDelete id={item.id} type={type} />
        </th>
      </tr>
    );
  }
}

export default withStyles(s)(ItemRow);
