/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Query } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';

import Item from '../../components/Item';
import ITEM_CONSTANTS from '../../constants/itemConstants';
import s from './DrawingsPage.css';
import GET_DRAWINGS from './getDrawingsMutation.graphql';

class DrawingsPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imagesList: PropTypes.object.isRequired,
  };

  getImagesForItem = drawingName => {
    const imagesForItem = [];
    imagesForItem.push(this.props.imagesList[`${drawingName}.jpg`]);
    return imagesForItem;
  };

  render() {
    return (
      <Query
        onError={() => <div>Erreur de chargement</div>}
        query={GET_DRAWINGS}
        ssr
      >
        {({ loading, data }) => {
          if (loading) return <div className={s.loading}>Chargement...</div>;

          const drawings = data.getAllDrawings;

          return (
            <div>
              <h1>{this.props.title}</h1>
              {drawings.map(drawing => (
                <Item
                  key={drawing.title}
                  item={drawing}
                  srcList={this.getImagesForItem(drawing.title)}
                  itemType={ITEM_CONSTANTS.TYPE.DRAWING}
                />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(s)(DrawingsPage);
