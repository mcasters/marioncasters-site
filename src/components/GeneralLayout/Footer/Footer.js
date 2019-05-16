import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './Footer.css';
import Link from '../../Link';
import LoginControl from '../../LoginControl';
import GLOBAL_CONSTANTS from '../../../constants/globalConstants';
import Feedback from '../Feedback';
import ROUTER_CONSTANTS from '../../../constants/routerConstants';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Feedback />
        <div className={s.container}>
          <span className={s.text}>{GLOBAL_CONSTANTS.COPYRIGHT}</span>
          <span>·</span>
          <Link className={s.link} to={ROUTER_CONSTANTS.ROUTER.HOME}>
            Home
          </Link>
          <span>·</span>
          <LoginControl />
          <span>·</span>
          <Link className={s.link} to={ROUTER_CONSTANTS.ROUTER.CONFIDENTIALITE}>
            Privacy
          </Link>
        </div>
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
