import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './Header.css';
import GLOB_CONST from '../../../constants/globalConstants';
import useScroll from '../../Hooks/useScroll';
import useHeight from '../../Hooks/useHeight';

function Header({ isHome, onHeight }) {
  useStyles(s);
  const [height, ref] = useHeight();
  const { scrollY } = useScroll();

  useEffect(() => {
    onHeight(height);
  }, [height, onHeight]);

  return isHome ? (
    <header>
      <div ref={ref} className={s.homeContainer}>
        <h1>{GLOB_CONST.SITE_TITLE}</h1>
      </div>
    </header>
  ) : (
    <header>
      <div
        className={
          scrollY > 0 ? `${s.container} ${s.sticky}` : `${s.container}`
        }
      >
        <h1>{GLOB_CONST.SITE_TITLE}</h1>
      </div>
    </header>
  );
}

Header.propTypes = {
  isHome: PropTypes.bool.isRequired,
  onHeight: PropTypes.func.isRequired,
};
export default Header;
