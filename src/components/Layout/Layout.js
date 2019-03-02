/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';

import styleModal from '../../../modules_modifications/style-modal.css';
import styleBurgerMenu from '../../../modules_modifications/style-burgerMenu.css';
import styleTabs from '../../../modules_modifications/style-tabs.css';
import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Navigation from '../Navigation';
import LAYOUT_CONSTANTS from '../../constants/layoutConstants';
import withViewport from '../WithViewport';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
    }).isRequired,
  };

  getIsMobile = () =>
    this.props.viewport.width < LAYOUT_CONSTANTS.BREAKPOINT.SM;

  render() {
    return (
      <div>
        <Header />
        <Navigation isMobile={this.getIsMobile()} />
        <main>{this.props.children}</main>
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default withStyles(
  normalizeCss,
  styleModal,
  styleBurgerMenu,
  styleTabs,
  s,
)(withViewport(Layout));
