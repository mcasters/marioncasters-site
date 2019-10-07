import React, { useRef, useEffect } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import s from './Header.css';
import GLOB_CONST from '../../../constants/globalConstants';
import WithScrolling from '../../WithScrolling';

function Header({ isHome, scroll, onHeight }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current !== null) {
      const { height } = ref.current.getBoundingClientRect();
      onHeight(height);
    }
  });

  const title = GLOB_CONST.SITE_TITLE;
  const isScrolling = scroll > 0;
  return isHome ? (
    <header>
      <div ref={ref} className={s.homeContainer}>
        <h1>{title}</h1>
      </div>
    </header>
  ) : (
    <header>
      <div
        className={
          isScrolling ? `${s.container} ${s.sticky}` : `${s.container}`
        }
      >
        <h1>{title}</h1>
      </div>
    </header>
  );
}

Header.propTypes = {
  isHome: PropTypes.bool.isRequired,
  scroll: PropTypes.number.isRequired,
  onHeight: PropTypes.func.isRequired,
};
export default withStyles(s)(WithScrolling(Header));
