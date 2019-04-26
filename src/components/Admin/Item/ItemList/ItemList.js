/* eslint-disable react/forbid-prop-types */
/* eslint-disable prefer-destructuring */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Query } from 'react-apollo/index';

import GET_ITEMS_QUERY from '../../../../data/graphql/queries/getAllItems.graphql';
import ITEM_CONSTANTS from '../../../../constants/itemConstants';
import ItemRow from '../ItemRow';
import s from './ItemList.css';

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
    const regExp = new RegExp(`${itemName}*`);
    const imagesForItem = [];
    this.props.allImages.forEach((value, key) => {
      if (regExp.test(key)) imagesForItem.push(value);
    });
    return imagesForItem;
  };

  render() {
    const title = 'Modification - Suppression';
    const type = this.props.type;

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
            <Query query={GET_ITEMS_QUERY} variables={{ type }} ssr>
              {({ error, data }) => {
                if (error) return <p>ERROR</p>;
                return (
                  <Fragment>
                    {data.getAllItems !== undefined &&
                      data.getAllItems.map(item => (
                        <ItemRow
                          item={item}
                          srcList={this.getImagesForItem(item.title)}
                          type={type}
                          key={item.id}
                        />
                      ))}
                  </Fragment>
                );
              }}
            </Query>
          </tbody>
        </table>
      </div>
    );
  }
}

export default withStyles(s)(ItemList);
