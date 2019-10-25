import React, { useState } from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './CustomMobileNav.css';
import ROUTER from '../../../../constants/router';
import Menu from './Menu';
import MenuButton from './MenuButton';

function CustomMobileNav() {
  useStyles(s);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const routes = [
    ['Présentation', `${ROUTER.PRESENTATION}`],
    ['Peintures', `${ROUTER.PEINTURES}`],
    ['Sculptures', `${ROUTER.SCULPTURES}`],
    ['Dessins', `${ROUTER.DESSINS}`],
    ['Contact', `${ROUTER.CONTACT}`],
    ['Home', `${ROUTER.HOME}`],
  ];

  return (
    <div className={s.container}>
      <MenuButton open={menuOpen} onClick={handleMenuClick} />
      <Menu open={menuOpen} onClick={closeMenu} routes={routes} />
    </div>
  );
}

export default CustomMobileNav;
