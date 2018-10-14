/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Query } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';

import Item from '../../components/Item';
import ITEM_CONSTANTS from '../../constants/itemConstants';
import s from './PaintingsPage.css';
import GET_PAINTINGS from './getPaintingsMutation.graphql';

class PaintingsPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imagesList: PropTypes.object.isRequired,
  };

  getImagesForItem = paintingName => {
    const imagesForItem = [];
    imagesForItem.push(this.props.imagesList[`${paintingName}.jpg`]);
    return imagesForItem;
  };

  render() {
    return (
      <Query
        onError={() => <div>Erreur de chargement</div>}
        query={GET_PAINTINGS}
        ssr
      >
        {({ loading, data }) => {
          if (loading) return <div>Chargements...</div>;

          const paintings = data.getAllPaintings;

          return (
            <div>
              <h1>{this.props.title}</h1>
              {paintings.map(painting => (
                <Item
                  key={painting.title}
                  item={painting}
                  srcList={this.getImagesForItem(painting.title)}
                  itemType={ITEM_CONSTANTS.TYPE.PAINTING}
                />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(s)(PaintingsPage);
