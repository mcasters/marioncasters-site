import React from 'react';
import { Query } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';

import DrawingItem from './DrawingItem';
import s from './DrawingsPage.css';
import GET_DRAWINGS from './getDrawingsMutation.graphql';

class DrawingsPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  importAllImages = r => {
    const images = {};
    r.keys().forEach(item => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };

  render() {
    const images = this.importAllImages(
      require.context('./../../../photoLibrary/drawing', false, /\.jpe?g$/),
    );
    return (
      <Query query={GET_DRAWINGS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Chargementsss...</div>;
          if (error) return <div>Erreur</div>;

          const list = data.getAllDrawings;

          return (
            <div>
              <h1>{this.props.title}</h1>
              {list.map(item => (
                <DrawingItem
                  key={item.title}
                  drawing={item}
                  src={images[`${item.title}.jpg`]}
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
