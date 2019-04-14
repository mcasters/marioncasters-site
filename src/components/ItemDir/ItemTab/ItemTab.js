/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import ITEM_CONSTANTS from '../../../constants/itemConstants';
import GET_PAINTINGS from './getPaintingsByYear.graphql';
import Item from '../Item/Item';
import s from './ItemTab.css';
import Alert from '../../Alert';

class ItemTab extends React.Component {
  static propTypes = {
    year: PropTypes.number.isRequired,
    allImages: PropTypes.object.isRequired,
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
    /* eslint-disable prefer-destructuring */
    const year = this.props.year;

    return (
      <Query
        onError={() => <div>Erreur de chargement</div>}
        query={GET_PAINTINGS}
        variables={{ year }}
        ssr
      >
        {({ loading, error, data }) => {
          if (loading) return <div className={s.loading}>Chargement...</div>;
          // if (error) return <p>Erreur de chargement : {error}</p>;
          const paintings = data.getPaintingsByYear;

          return (
            <Fragment>
              <h2>{year}</h2>
              {paintings.map(painting => {
                const list = this.getImagesForItem(painting.title);
                if (list !== undefined || list.length !== 0) {
                  return (
                    <Item
                      key={painting.title}
                      item={painting}
                      srcList={list}
                      itemType={ITEM_CONSTANTS.TYPE.PAINTING}
                    />
                  );
                }
                return null;
              })}
              {error && <Alert message="Erreur GraphQl" isError />}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(s)(ItemTab);
