import React from 'react';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './Main.css';
import useSsrDone from '../../Hooks/useSrrDone';

function Main({ isHome, isLessThanMD, height, headerHeight, children }) {
  useStyles(s);
  const ssrDone = useSsrDone();

  const adaptedHeight = isLessThanMD
    ? height - headerHeight
    : height + 0.001 * headerHeight;
  const styleHeight = { height: ssrDone ? adaptedHeight : 640 };

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

export default Main;
