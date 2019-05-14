import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/withStyles';

import ITEM_CONST from '../../../../constants/itemConstants';
import ItemRow from '../ItemRow';
import s from './ItemList.css';
import GET_ITEMS_QUERY from '../../../../data/graphql/queries/getAllItems.graphql';

class ItemList extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
  };

  getUrlImages = itemTitle => {
    const imagesForItem = [];
    if (this.props.type === ITEM_CONST.TYPE.SCULPTURE) {
      let i = 1;
      while (i < 5) {
        imagesForItem.push(
          `${ITEM_CONST.SCULPTURE_PATH}/${itemTitle}_${i}.jpg`,
        );
        i++;
      }
    } else if (this.props.type === ITEM_CONST.TYPE.PAINTING) {
      imagesForItem.push(`${ITEM_CONST.PAINTING_PATH}/${itemTitle}.jpg`);
    } else imagesForItem.push(`${ITEM_CONST.DRAWING_PATH}/${itemTitle}.jpg`);
    return imagesForItem;
  };

  render() {
    const title = 'Modification - Suppression';
    const { type } = this.props;
    const isSculpture = type === ITEM_CONST.TYPE.SCULPTURE;

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
                    {isSculpture && <th>Longueur</th>}
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
                        srcList={this.getUrlImages(item.title)}
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
