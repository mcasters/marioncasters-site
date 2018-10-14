/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';
import Link from '../Link';
import githubLogo from './githubTransparent.png';
import graphqlLogo from './graphqlTransparent.png';
import nodejsLogo from './nodeJSTransparent.png';
import reactLogo from './reactTransparent.png';
import appleLogo from './appleTransparent.png';

class Feedback extends React.Component {
  render() {
    return (
      <aside>
        <div className={s.container}>
          <Link to="https://nodejs.org">
            <img src={nodejsLogo} className={s.nodejsLogo} alt="NodeJS" />
          </Link>
          <Link to="https://reactjs.org">
            <img src={reactLogo} className={s.reactLogo} alt="React" />
          </Link>
          <Link to="https://graphql.org">
            <img src={graphqlLogo} className={s.graphqlLogo} alt="GraphQL" />
          </Link>
          <Link to="https://github.com">
            <img src={githubLogo} className={s.githubLogo} alt="GitHub" />
          </Link>
          <Link to="https://www.apple.com">
            <img src={appleLogo} className={s.appleLogo} alt="Apple" />
          </Link>
        </div>
      </aside>
    );
  }
}

export default withStyles(s)(Feedback);
