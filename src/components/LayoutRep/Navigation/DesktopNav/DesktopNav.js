import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import history from '../../../../history';
import s from './DesktopNav.css';
import Link from '../../../Link';
import logoUrl2x from '../logo-100.png';
import ROUTER_CONSTANTS from '../../../../constants/routerConstants';

function DesktopNav({ isHome }) {
  const [location, setLocation] = useState('');

  const updateLocation = () => {
    setLocation(window.location.pathname);
  };

  React.componentDidMount = () => {
    updateLocation();
    history.listen(() => {
      updateLocation();
    });
  };

  return (
    <aside>
      <div className={isHome ? [s.bar, s.homeBar].join(' ') : s.bar} />
      <nav>
        <Link
          className={
            location === ROUTER_CONSTANTS.ROUTER.PRESENTATION
              ? `${s.link} ${s.active}`
              : `${s.link}`
          }
          to={ROUTER_CONSTANTS.ROUTER.PRESENTATION}
        >
          Présentation
        </Link>
        <Link
          className={
            location === ROUTER_CONSTANTS.ROUTER.PEINTURES
              ? `${s.link} ${s.active}`
              : `${s.link}`
          }
          to={ROUTER_CONSTANTS.ROUTER.PEINTURES}
        >
          Peintures
        </Link>
        <Link
          className={
            location === ROUTER_CONSTANTS.ROUTER.SCULPTURES
              ? `${s.link} ${s.active}`
              : `${s.link}`
          }
          to={ROUTER_CONSTANTS.ROUTER.SCULPTURES}
        >
          Sculptures
        </Link>
        <Link
          className={
            location === ROUTER_CONSTANTS.ROUTER.DESSINS
              ? `${s.link} ${s.active}`
              : `${s.link}`
          }
          to={ROUTER_CONSTANTS.ROUTER.DESSINS}
        >
          Dessins
        </Link>
        <Link
          className={
            location === ROUTER_CONSTANTS.ROUTER.CONTACT
              ? `${s.link} ${s.active}`
              : `${s.link}`
          }
          to={ROUTER_CONSTANTS.ROUTER.CONTACT}
        >
          Contact
        </Link>
        <Link className={s.linkHome} to={ROUTER_CONSTANTS.ROUTER.HOME}>
          <img src={logoUrl2x} alt="Signature de Marion Casters" />
        </Link>
      </nav>
    </aside>
  );
}

DesktopNav.propTypes = {
  isHome: PropTypes.bool.isRequired,
};

export default withStyles(s)(DesktopNav);
