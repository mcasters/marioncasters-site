import React from 'react';
import { Query } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Item from './Item';
import s from './SculpturesPage.css';
import GET_PAINTINGS from './getSculpturesMutation.graphql';

class SculpturesPage extends React.Component {
  importAllImages = r => {
    const images = {};
    r.keys().forEach(item => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };

  render() {
    const allImages = this.importAllImages(
      require.context(
        './../../../../photoLibrary/sculpture',
        false,
        /\.jpe?g$/,
      ),
    );
    return (
      <Query
        onError={() => <div>Erreur de chargement</div>}
        query={GET_PAINTINGS}
        ssr
      >
        {({ data }) => {
          const list = data.getAllSculptures;
          return (
            <div>
              <h1>Sculptures</h1>
              {list.map(item => (
                <Item
                  item={item}
                  imageList={allImages.filter(image =>
                    image.title.contains(item.title),
                  )}
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
