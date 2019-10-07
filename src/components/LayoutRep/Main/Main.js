import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import s from './Main.css';

function Main({ isHome, isLessThanMD, height, headerHeight, children }) {
  const adaptedHeight = isLessThanMD
    ? height - headerHeight
    : height + 0.001 * headerHeight;
  const styleHeight = { height: adaptedHeight };

  return isHome ? (
    <main className={s.mainHome} style={styleHeight}>
      {children}
    </main>
  ) : (
    <main className={s.main}>{children}</main>
  );
}

Main.propTypes = {
  isHome: PropTypes.bool.isRequired,
  isLessThanMD: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  headerHeight: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(s)(Main);
