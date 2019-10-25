import React, { useState } from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './CustomMobileNav.css';
import Link from '../../../Link';
import logoUrl from '../logo-45.png';
import logoUrl2x from '../logo-100.png';
import ROUTER from '../../../../constants/router';
import Menu from './Menu';
import MenuButton from './MenuButton';

function CustomMobileNav() {
  useStyles(s);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={s.container}>
      <MenuButton open={menuOpen} onClick={handleMenuClick} />
      <Menu open={menuOpen}>
        <Link className={s.item} to={ROUTER.PRESENTATION} onClick={closeMenu}>
          Présentation
        </Link>
        <Link className={s.item} to={ROUTER.PEINTURES} onClick={closeMenu}>
          Peintures
        </Link>
        <Link className={s.item} to={ROUTER.SCULPTURES} onClick={closeMenu}>
          Sculptures
        </Link>
        <Link className={s.item} to={ROUTER.DESSINS} onClick={closeMenu}>
          Dessins
        </Link>
        <Link className={s.item} to={ROUTER.CONTACT} onClick={closeMenu}>
          Contact
        </Link>
        <Link className={s.navHomeLink} to={ROUTER.HOME} onClick={closeMenu}>
          <img
            src={logoUrl}
            srcSet={`${logoUrl2x} 2x`}
            alt="Signature de Marion Casters"
          />
        </Link>
        <p className={s.title}>Marion Casters</p>
      </Menu>
    </div>
  );
}

export default CustomMobileNav;
