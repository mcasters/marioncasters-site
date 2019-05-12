/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/withStyles';

import ITEM_CONSTANTS from '../../../../constants/itemConstants';
import ItemRow from '../ItemRow';
import s from './ItemList.css';
import GET_ITEMS_QUERY from '../../../../data/graphql/queries/getAllItems.graphql';

class ItemList extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    allImages: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.isSculpture = this.props.type === ITEM_CONSTANTS.TYPE.SCULPTURE;
  }

  getImagesForItem = itemName => {
    const regExp = this.isSculpture
      ? new RegExp(`${itemName}_[1-4].jpg`)
      : new RegExp(`${itemName}.jpg`);
    const imagesForItem = [];
    this.props.allImages.forEach((value, key) => {
      if (regExp.test(key)) imagesForItem.push(value);
    });
    return imagesForItem;
  };

  render() {
    const title = 'Modification - Suppression';
    const { type } = this.props;

    return (
      <Query query={GET_ITEMS_QUERY} variables={{ type }} ssr>
        {({ error, data }) => {
          if (error) return <p>ERROR</p>;
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
                  {data.getAllItems !== undefined &&
                    data.getAllItems.map(item => (
                      <ItemRow
                        key={item.id}
                        item={item}
                        srcList={this.getImagesForItem(item.title)}
                        type={type}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(s)(ItemList);
