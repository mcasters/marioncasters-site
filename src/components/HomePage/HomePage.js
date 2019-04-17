import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Query } from 'react-apollo';

import GET_HOME_CONTENT from '../../data/graphql/queries/getContent.graphql';

import s from './HomePage.css';

class HomePage extends React.Component {
  render() {
    const label = 'home';
    return (
      <Query query={GET_HOME_CONTENT} variables={label} ssr>
        <article>
          <div className={s.pageContent} />
        </article>
      </Query>
    );
  }
}

export default withStyles(s)(HomePage);
