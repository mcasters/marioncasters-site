/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Query } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';

import PaintingItem from './PaintingItem';
import s from './PaintingsPage.css';
import GET_PAINTINGS from './getPaintingsMutation.graphql';

class PaintingsPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imagesList: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Query query={GET_PAINTINGS}>
        {({ loading, error, data }) => {
          if (loading) return <div className={s.loading}>Chargements...</div>;
          if (error) return <div className={s.error}>Erreur</div>;

          const list = data.getAllPaintings;

          return (
            <div className={s.container}>
              <h1>{this.props.title}</h1>
              {list.map(item => (
                <PaintingItem
                  key={item.title}
                  painting={item}
                  src={this.props.imagesList[`${item.title}.jpg`]}
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
