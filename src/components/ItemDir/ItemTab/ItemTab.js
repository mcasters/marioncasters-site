/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import ITEM_CONSTANTS from '../../../constants/itemConstants';
import GET_ITEMS_BY_YEAR_QUERY from '../../../data/graphql/queries/getItemsByYear.graphql';
import Item from '../Item/Item';
import s from './ItemTab.css';
import Alert from '../../Alert';

class ItemTab extends React.Component {
  static propTypes = {
    year: PropTypes.number.isRequired,
    allImages: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
  };

  getImagesForItem = itemName => {
    const regExp = new RegExp(`${itemName}*.jpg`);
    const imagesForItem = [];
    this.props.allImages.forEach((value, key) => {
      if (regExp.test(key)) imagesForItem.push(value);
    });
    return imagesForItem;
  };

  render() {
    const year = this.props.year; // eslint-disable-line prefer-destructuring
    const type = this.props.type; // eslint-disable-line prefer-destructuring

    return (
      <Query query={GET_ITEMS_BY_YEAR_QUERY} variables={{ year, type }} ssr>
        {({ loading, error, data }) => {
          if (loading) return <div className={s.loading}>Chargement...</div>;

          return (
            <Fragment>
              <h2>{year}</h2>
              {data.getItemsByYear.map(item => {
                const list = this.getImagesForItem(item.title);
                if (list !== undefined || list.length !== 0) {
                  return (
                    <Item
                      key={item.title}
                      item={item}
                      srcList={list}
                      itemType={ITEM_CONSTANTS.TYPE.PAINTING}
                    />
                  );
                }
                return null;
              })}
              {error && (
                <Alert message="Erreur au charggement des items" isError />
              )}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(s)(ItemTab);
