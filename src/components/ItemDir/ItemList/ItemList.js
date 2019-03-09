/* eslint-disable react/forbid-prop-types */
/* eslint-disable prefer-destructuring */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Query } from 'react-apollo';

import PAINTING_QUERY from './getAllPaintings.graphql';
import SCULPTURE_QUERY from './getAllSculptures.graphql';
import DRAWING_QUERY from './getAllDrawings.graphql';
import ITEM_CONSTANTS from '../../../constants/itemConstants';
import ItemRow from '../ItemRow/ItemRow';
import s from './ItemList.css';

class ItemList extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    allImages: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.isSculpture = false;

    if (this.props.type === ITEM_CONSTANTS.TYPE.PAINTING) {
      this.query = PAINTING_QUERY;
    }
    if (this.props.type === ITEM_CONSTANTS.TYPE.SCULPTURE) {
      this.query = SCULPTURE_QUERY;
      this.isSculpture = true;
    }
    if (this.props.type === ITEM_CONSTANTS.TYPE.DRAWING) {
      this.query = DRAWING_QUERY;
    }
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
    const query = this.query;
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
            <Query query={query} ssr>
              {({ loading, error, data }) => {
                if (loading) return null;
                if (error) return <p>ERROR</p>;

                let resultTab;
                if (query === PAINTING_QUERY) resultTab = data.getAllPaintings;
                if (query === DRAWING_QUERY) resultTab = data.getAllDrawings;
                if (query === SCULPTURE_QUERY)
                  resultTab = data.getAllSculptures;

                return (
                  <Fragment>
                    {resultTab.map(item => (
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
