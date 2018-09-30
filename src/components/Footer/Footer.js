import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Footer.css';
import Link from '../Link';
import LoginControl from '../LoginControl';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© Marion Casters 2018</span>
          <span>·</span>
          <Link className={s.link} to="/">
            Home
          </Link>
          <span>·</span>
          <LoginControl />
          <span>·</span>
          <Link className={s.link} to="/privacy">
            Privacy
          </Link>
          <span>·</span>
          <Link className={s.link} to="/not-found">
            Not Found
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
