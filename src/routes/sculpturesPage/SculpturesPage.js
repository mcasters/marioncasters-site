/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Query } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';

import Item from '../../components/Item';
import ITEM_CONSTANTS from '../../constants/itemConstants';
import s from './SculpturesPage.css';
import GET_SCULPTURES from './getSculpturesMutation.graphql';

class SculpturesPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imagesList: PropTypes.object.isRequired,
  };

  getImagesForItem = sculptureName => {
    const regExp = new RegExp(`${sculptureName}*`);
    const imagesForItem = [];
    this.props.imagesList.forEach((value, key) => {
      if (regExp.test(key)) imagesForItem.push(value);
    });
    return imagesForItem;
  };

  render() {
    return (
      <Query
        onError={() => <div>Erreur de chargement</div>}
        query={GET_SCULPTURES}
        ssr
      >
        {({ loading, data }) => {
          if (loading) return <div className={s.loading}>Chargement...</div>;

          const sculptures = data.getAllSculptures;

          return (
            <div>
              <h1>{this.props.title}</h1>
              {sculptures.map(sculpture => (
                <Item
                  key={sculpture.title}
                  item={sculpture}
                  srcList={this.getImagesForItem(sculpture.title)}
                  itemType={ITEM_CONSTANTS.TYPE.SCULPTURE}
                />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(s)(SculpturesPage);
