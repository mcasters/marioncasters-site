/* eslint-disable css-modules/no-undef-class */
import React, { useRef } from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import PropTypes from 'prop-types';

import s from './Menu.css';
import Link from '../../../Link';
import logoUrl from '../logo-45.png';
import logoUrl2x from '../logo-100.png';
import useOnClickOutside from '../../../Hooks/useOnClickOutside/useOnClickOutside';

function Menu({ open, onClick, routes }) {
  useStyles(s);
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, onClick);

  return (
    <div
      ref={menuRef}
      className={open ? `${s.container} ${s.open}` : `${s.container}`}
    >
      <nav className={s.menuList}>
        {routes.map(route => {
          if (route[0] === 'Home') {
            return (
              <Link
                key={route[0]}
                className={s.navHomeLink}
                to={route[1]}
                onClick={onClick}
              >
                <img
                  src={logoUrl}
                  srcSet={`${logoUrl2x} 2x`}
                  alt="Signature de Marion Casters"
                />
              </Link>
            );
          }
          return (
            <Link
              key={route[0]}
              className={s.item}
              to={route[1]}
              onClick={onClick}
            >
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
