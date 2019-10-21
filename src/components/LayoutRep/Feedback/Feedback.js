import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './Feedback.css';
import Link from '../../Link';
import graphqlLogo from './graphqlTransparent.png';
import nodejsLogo from './nodeJSTransparent.png';
import reactLogo from './reactTransparent.png';
import appleLogo from './appleTransparent.png';

function Feedback() {
  useStyles(s);
  return (
    <div className={s.container}>
      <Link to="https://nodejs.org" target="_blank" rel="noreferrer">
        <img src={nodejsLogo} className={s.nodejsLogo} alt="NodeJS" />
      </Link>
      <Link to="https://reactjs.org" target="_blank" rel="noreferrer">
        <img src={reactLogo} className={s.reactLogo} alt="React" />
      </Link>
      <Link to="https://graphql.org" target="_blank" rel="noreferrer">
        <img src={graphqlLogo} className={s.graphqlLogo} alt="GraphQL" />
      </Link>
      <Link to="https://www.apple.com" target="_blank" rel="noreferrer">
        <img src={appleLogo} className={s.appleLogo} alt="Apple" />
      </Link>
    </div>
  );
}

export default Feedback;
