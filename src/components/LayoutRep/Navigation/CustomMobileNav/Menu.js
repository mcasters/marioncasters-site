/* eslint-disable css-modules/no-undef-class */
import React, { useEffect, useRef } from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import PropTypes from 'prop-types';

import s from './Menu.css';
import Link from '../../../Link';
import logoUrl from '../logo-45.png';
import logoUrl2x from '../logo-100.png';

function Menu({ open, onClick, routes }) {
  useStyles(s);
  const menuRef = useRef(null);

  const handleDocumentClick = e => {
    if (open && !menuRef.current.contains(e.target)) onClick();
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleDocumentClick, false);
      return function cleanup() {
        document.removeEventListener('click', handleDocumentClick, false);
      };
    }
    return undefined;
  });

  return (
    <div
      ref={menuRef}
      className={open ? `${s.container} ${s.open}` : `${s.container}`}
    >
      <nav className={s.menuList}>
        {routes.map(route => {
          if (route[0] === 'Home') {
            return (
              <Link className={s.navHomeLink} to={route[1]} onClick={onClick}>
                <img
                  src={logoUrl}
                  srcSet={`${logoUrl2x} 2x`}
                  alt="Signature de Marion Casters"
                />
              </Link>
            );
          }
          return (
            <Link className={s.item} to={route[1]} onClick={onClick}>
              {route[0]}
            </Link>
          );
        })}
        <p className={s.name}>Marion Casters</p>
      </nav>
    </div>
  );
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  routes: PropTypes.array.isRequired,
};

export default Menu;
