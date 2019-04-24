/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import Item from '../../components/ItemDir/Item';
import ITEM_CONSTANTS from '../../constants/itemConstants';
import s from './DrawingsPage.css';
import GET_ITEMS_QUERY from '../../data/graphql/queries/getAllItems.graphql';

class DrawingsPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    allImages: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.type = ITEM_CONSTANTS.TYPE.DRAWING;
  }

  getImagesForItem = drawingName => {
    const regExp = new RegExp(`${drawingName}.jpg`);
    const imagesForItem = [];
    this.props.allImages.forEach((value, key) => {
      if (regExp.test(key)) imagesForItem.push(value);
    });
    return imagesForItem;
  };

  render() {
    const type = this.type; // eslint-disable-line prefer-destructuring
    return (
      <Query query={GET_ITEMS_QUERY} variables={{ type }} ssr>
        {({ loading, error, data }) => {
          if (loading) return <div className={s.loading}>Chargement...</div>;
          if (error) return <p>Erreur de chargement : {error}</p>;

          return (
            <Fragment>
              <h1 className={s.title}>{this.props.title}</h1>
              {data.getAllItems.map(drawing => (
                <Item
                  key={drawing.id}
                  item={drawing}
                  srcList={this.getImagesForItem(drawing.title)}
                  itemType={type}
                />
              ))}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(s)(DrawingsPage);
