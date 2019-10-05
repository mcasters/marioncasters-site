/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import normalizeCss from '../../../../node_modules/normalize.css/normalize.css';

import styleModal from '../../../../modules_modifications/style-modal.css';
import styleTabs from '../../../../modules_modifications/style-tabs.css';
import styleDayPicker from '../../../../modules_modifications/style-dayPicker.css';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';
import Navigation from '../Navigation';
import LAYOUT_CONSTANTS from '../../../constants/layoutConstants';
import withViewport from '../../WithViewport';
import ErrorBoundary from '../../ErrorBoundary';
import AppContext from '../../../context';
import Main from '../Main';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerHeight: 0,
    };
  }

  render() {
    const isHome =
      this.context.pathname === '/' || this.context.pathname === '/home';
    const isLessThanMD =
      this.props.viewport.width < LAYOUT_CONSTANTS.BREAKPOINT.MD;
    const { height } = this.props.viewport;

    const navigation = (
      <Navigation isLessThanMD={isLessThanMD} isHome={isHome} />
    );

    const header = (
      <Header
        isHome={isHome}
        getHeight={headerHeight => {
          this.setState({ headerHeight });
        }}
      />
    );

    const main = (
      <ErrorBoundary>
        <Main
          isHome={isHome}
          isLessThanMD={isLessThanMD}
          height={height}
          headerHeight={this.state.headerHeight}
        >
          {this.props.children}
        </Main>
      </ErrorBoundary>
    );

    const footer = <Footer />;

    return isLessThanMD ? (
      <>
        {navigation}
        {header}
        {main}
        {footer}
      </>
    ) : (
      <>
        {header}
        {navigation}
        {main}
        {footer}
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  viewport: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

Layout.contextType = AppContext;

export default withStyles(
  normalizeCss,
  styleModal,
  styleTabs,
  styleDayPicker,
  s,
)(withViewport(Layout));
