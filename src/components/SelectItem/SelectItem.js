/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import ITEM_CONSTANTS from '../../constants/itemConstants';
import GET_PAINTINGS from './getPaintingsByYear.graphql';
import Item from '../Item';

class SelectItem extends React.Component {
  static propTypes = {
    year: PropTypes.number.isRequired,
    imagesList: PropTypes.object.isRequired,
  };

  getImagesForItem = paintingName => {
    const imagesForItem = [];
    imagesForItem.push(this.props.imagesList[`${paintingName}.jpg`]);
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
          if (loading) return null;
          if (error) return `Error!: ${error}`;
          const paintings = data.getPaintingsByYear;

          return (
            <div>
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
            </div>
          );
        }}
      </Query>
    );
  }
}

export default SelectItem;
