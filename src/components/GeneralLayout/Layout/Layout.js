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
  };

  getHeight = isLessThanMD => {
    return isLessThanMD
      ? this.props.viewport.height - this.state.headerHeight
      : this.props.viewport.height;
  };

  getIsLessThanMD = () =>
    this.props.viewport.width < LAYOUT_CONSTANTS.BREAKPOINT.MD;

  render() {
    const isHome =
      this.context.pathname === '/' || this.context.pathname === '/home';
    const isLessThanMD = this.getIsLessThanMD();
    let height;

    if (isHome) height = this.getHeight(isLessThanMD);

    return isLessThanMD ? (
      <Fragment>
        <Navigation isLessThanMD={isLessThanMD} isHome={isHome} />
        <Header
          isHome={isHome}
          getHeight={headerHeight => {
            this.setState({ headerHeight });
          }}
        />
        <ErrorBoundary>
          {isHome && <Main height={height}>{this.props.children}</Main>}
          {!isHome && <Main>{this.props.children}</Main>}
        </ErrorBoundary>
        <Footer />
      </Fragment>
    ) : (
      <Fragment>
        <Header isHome={isHome} />
        <Navigation isLessThanMD={isLessThanMD} isHome={isHome} />
        <ErrorBoundary>
          {isHome && <Main height={height}>{this.props.children}</Main>}
          {!isHome && <Main>{this.props.children}</Main>}
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
