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
import Main from '../Main';
import AppContext from '../../../context';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
  };

  static contextType = AppContext;

  state = {
    headerHeight: null,
    footerHeight: null,
  };

  getMainMobileHeight = () => {
    return this.props.viewport.height - this.state.footerHeight;
  };

  getMainHeight = () => {
    return (
      this.props.viewport.height -
      this.state.headerHeight -
      this.state.footerHeight
    );
  };

  getIsLessThanMD = () =>
    this.props.viewport.width < LAYOUT_CONSTANTS.BREAKPOINT.MD;

  render() {
    const isHome =
      this.context.pathname === '/' || this.context.pathname === '/home';
    const isLessThanMD = this.getIsLessThanMD();

    if (isHome) {
      const mainHeight = isLessThanMD
        ? this.getMainMobileHeight()
        : this.getMainHeight();

      return (
        <Fragment>
          <Header
            getHeight={headerHeight => {
              this.setState({ headerHeight });
            }}
          />
          <Navigation isLessThanMD={isLessThanMD} />
          <ErrorBoundary>
            {mainHeight !== undefined && mainHeight !== null && (
              <Main isHomePage={isHome} height={mainHeight}>
                {this.props.children}
              </Main>
            )}
          </ErrorBoundary>
          <Footer
            getHeight={footerHeight => {
              this.setState({ footerHeight });
            }}
          />
        </Fragment>
      );
    }
    return (
      <Fragment>
        <Header
          getHeight={headerHeight => {
            this.setState({ headerHeight });
          }}
        />
        <Navigation isLessThanMD={isLessThanMD} />
        <ErrorBoundary>
          <Main isHomePage={isHome}>{this.props.children}</Main>
        </ErrorBoundary>
        <Footer
          getHeight={footerHeight => {
            this.setState({ footerHeight });
          }}
        />
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
