import React from 'react';
import PropTypes from 'prop-types';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

function Navigation({ isLessThanMD, isHome }) {
  return isLessThanMD ? <MobileNav /> : <DesktopNav isHome={isHome} />;
}

Navigation.propTypes = {
  isLessThanMD: PropTypes.bool.isRequired,
  isHome: PropTypes.bool,
};

Navigation.defaultProps = {
  isHome: false,
};

export default Navigation;
