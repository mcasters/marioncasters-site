/* eslint-disable css-modules/no-unused-class */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import normalizeCss from '../../../../node_modules/normalize.css/normalize.css';

import styleModal from '../../../../modules_modifications/style-modal.css';
import styleBurgerMenu from '../../../../modules_modifications/style-burgerMenu.css';
import styleTabs from '../../../../modules_modifications/style-tabs.css';
import styleDayPicker from '../../../../modules_modifications/style-dayPicker.css';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';
import Navigation from '../Navigation';
import LAYOUT_CONSTANTS from '../../../constants/layoutConstants';
import withViewport from '../../WithViewport';
import ErrorBoundary from '../../ErrorBoundary';

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
      <Fragment>
        <Header />
        <Navigation isMobile={this.getIsMobile()} />
        <ErrorBoundary>
          <main>{this.props.children}</main>
        </ErrorBoundary>
        <Footer />
      </Fragment>
    );
  }
}

export default withStyles(
  normalizeCss,
  styleModal,
  styleBurgerMenu,
  styleTabs,
  styleDayPicker,
  s,
)(withViewport(Layout));
