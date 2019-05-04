/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import ITEM_CONSTANTS from '../../../../constants/itemConstants';
import ItemRow from '../ItemRow';
import s from './ItemList.css';

class ItemList extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    allImages: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.isSculpture = this.props.type === ITEM_CONSTANTS.TYPE.SCULPTURE;
  }

  getImagesForItem = itemName => {
    const regExp = new RegExp(`${itemName}*`);
    const imagesForItem = [];
    this.props.allImages.forEach((value, key) => {
      if (regExp.test(key)) imagesForItem.push(value);
    });
    return imagesForItem;
  };

  render() {
    const title = 'Modification - Suppression';
    const { items, type } = this.props;

    return (
      <div className={s.listContainer}>
        <h2>{title}</h2>
        <table className={s.adminList}>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Date</th>
              <th>Technique</th>
              <th>Description</th>
              <th>Hauteur</th>
              <th>Largeur</th>
              {this.isSculpture && <th>Longueur</th>}
              <th>Image</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <ItemRow
                item={item}
                srcList={this.getImagesForItem(item.title)}
                type={type}
                key={item.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withStyles(s)(ItemList);
