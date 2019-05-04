/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import s from './Navigation.css';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

class Navigation extends React.Component {
  static propTypes = {
    isMobile: PropTypes.bool.isRequired,
  };

  render() {
    const { isMobile } = this.props;

    return isMobile ? <MobileNav /> : <DesktopNav />;
  }
}

export default withStyles(s)(Navigation);