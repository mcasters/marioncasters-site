import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Footer.css';
import Link from '../Link';
import LoginControl from '../LoginControl';
import GLOBAL_CONSTANTS from '../../constants/globalConstants';
import Feedback from '../Feedback';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Feedback />
        <div className={s.container}>
          <span className={s.text}>{GLOBAL_CONSTANTS.COPYRIGHT}</span>
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
        </div>
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
