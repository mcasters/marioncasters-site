import React from 'react';
import { Query } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import PaintingItem from './PaintingItem';
import s from './PaintingsPage.css';
import GET_PAINTINGS from './getPaintingsMutation.graphql';

class PaintingsPage extends React.Component {
  importAllImages = r => {
    const images = {};
    r.keys().forEach(item => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };

  render() {
    const images = this.importAllImages(
      require.context(
        './../../../public/photoLibrary/painting',
        false,
        /\.jpe?g$/,
      ),
    );
    return (
      <Query query={GET_PAINTINGS}>
        {({ loading, error, data }) => {
          if (loading) return <div className={s.loading}>Chargementsss...</div>;
          if (error) return <div className={s.error}>Erreur</div>;

          const list = data.getAllPaintings;

          return (
            <div className={s.root}>
              <div className={s.container}>
                <h1>Peintures</h1>
                {list.map(item => (
                  <PaintingItem
                    key={item.title}
                    painting={item}
                    src={images[`${item.title}.jpg`]}
                  />
                ))}
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(s)(PaintingsPage);
