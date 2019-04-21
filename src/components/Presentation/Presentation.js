import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Query } from 'react-apollo';

import GET_CONTENT from '../../data/graphql/queries/getContent.graphql';

import s from './Presentation.css';

class Presentation extends React.Component {
  render() {
    const label = 'presentation-content';
    return (
      <Query query={GET_CONTENT} variables={{ label }} ssr>
        {({ loading, data }) => {
          if (loading) return <div>Chargement...</div>;

          return (
            <article>
              <img
                className={s.image}
                src="./portrait.jpg"
                alt="Portrait de Marion Casters"
              />
              {data.getContent && <div>{data.getContent.text}</div>}
            </article>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(s)(Presentation);
