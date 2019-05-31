import React from 'react';
import PropTypes from 'prop-types';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

class Navigation extends React.Component {
  static propTypes = {
    isLessThanMD: PropTypes.bool.isRequired,
    isHome: PropTypes.bool,
  };

  static defaultProps = {
    isHome: false,
  };

  render() {
    const { isLessThanMD, isHome } = this.props;

    return isLessThanMD ? <MobileNav /> : <DesktopNav isHome={isHome} />;
  }
}

export default Navigation;
