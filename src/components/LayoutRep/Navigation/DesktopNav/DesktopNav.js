import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './DesktopNav.css';
import Link from '../../../Link';
import logoUrl2x from '../logo-100.png';
import ROUTER from '../../../../constants/router';
import AppContext from '../../../../context';

function DesktopNav({ isHome }) {
  useStyles(s);
  const context = useContext(AppContext);
  const location = context.pathname;

  return (
    <aside>
      <div className={isHome ? [s.bar, s.homeBar].join(' ') : s.bar} />
      <nav className={s.desktopNav}>
        <Link
          className={
            location === ROUTER.PRESENTATION
              ? `${s.link} ${s.active}`
              : `${s.link}`
          }
          to={ROUTER.PRESENTATION}
        >
          Présentation
        </Link>
        <Link
          className={
            location === ROUTER.PEINTURES
              ? `${s.link} ${s.active}`
              : `${s.link}`
          }
          to={ROUTER.PEINTURES}
        >
          Peintures
        </Link>
        <Link
          className={
            location === ROUTER.SCULPTURES
              ? `${s.link} ${s.active}`
              : `${s.link}`
          }
          to={ROUTER.SCULPTURES}
        >
          Sculptures
        </Link>
        <Link
          className={
            location === ROUTER.DESSINS ? `${s.link} ${s.active}` : `${s.link}`
          }
          to={ROUTER.DESSINS}
        >
          Dessins
        </Link>
        <Link
          className={
            location === ROUTER.CONTACT ? `${s.link} ${s.active}` : `${s.link}`
          }
          to={ROUTER.CONTACT}
        >
          Contact
        </Link>
        <Link className={s.linkHome} to={ROUTER.HOME}>
          <img src={logoUrl2x} alt="Signature de Marion Casters" />
        </Link>
      </nav>
    </aside>
  );
}

DesktopNav.propTypes = {
  isHome: PropTypes.bool.isRequired,
};

export default DesktopNav;
