import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import PropTypes from 'prop-types';

import s from './Menu.css';

function Menu({ open, children }) {
  useStyles(s);

  return (
    <div className={open ? `${s.container} ${s.open}` : `${s.container}`}>
      {open && <div className={s.menuList}>{children}</div>}
    </div>
  );
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Menu;
