import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { slide as BurgerMenu } from 'react-burger-menu';

import s from './MobileNav.css';
import Link from '../../../Link';
import logoUrl from '../logo-45.png';
import logoUrl2x from '../logo-100.png';
import ROUTER_CONSTANTS from '../../../../constants/router';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '20px',
    left: '-10px',
    top: '22px',
  },
  bmBurgerBars: {
    height: '10%',
    background: '#a86363',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#ab8b8b',
  },
  bmMenu: {
    background: '#333333',
    padding: '2.5em 1.5em 0',
    fontSize: '15px',
  },
  bmItemList: {
    boxSizing: 'border-box',
    padding: '0.8em',
  },
  bmItem: {
    padding: '1em 0',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleChange = state => {
    setIsMenuOpen(state.isMenuOpen);
  };

  return (
    <BurgerMenu
      isOpen={isMenuOpen}
      width={250}
      onStateChange={state => handleChange(state)}
      styles={styles}
    >
      <Link to={ROUTER_CONSTANTS.ROUTER.PRESENTATION} onClick={closeMenu}>
        Présentation
      </Link>
      <Link to={ROUTER_CONSTANTS.ROUTER.PEINTURES} onClick={closeMenu}>
        Peintures
      </Link>
      <Link to={ROUTER_CONSTANTS.ROUTER.SCULPTURES} onClick={closeMenu}>
        Sculptures
      </Link>
      <Link to={ROUTER_CONSTANTS.ROUTER.DESSINS} onClick={closeMenu}>
        Dessins
      </Link>
      <Link to={ROUTER_CONSTANTS.ROUTER.CONTACT} onClick={closeMenu}>
        Contact
      </Link>
      <Link
        className={s.navHomeLink}
        to={ROUTER_CONSTANTS.ROUTER.HOME}
        onClick={closeMenu}
      >
        <img
          src={logoUrl}
          srcSet={`${logoUrl2x} 2x`}
          alt="Signature de Marion Casters"
        />
      </Link>
      <p className={s.title}>Marion Casters</p>
    </BurgerMenu>
  );
}

export default withStyles(s)(MobileNav);
