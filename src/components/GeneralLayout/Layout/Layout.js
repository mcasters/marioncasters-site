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

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
  };

  state = {
    headerHeight: null,
    footerHeight: null,
    mainHeight: null,
  };

  getIsLessThanMD = () =>
    this.props.viewport.width < LAYOUT_CONSTANTS.BREAKPOINT.MD;

  getHeightForHome = () => {};

  componentDidMount = () => {
    this.setState(
      {
        headerHeight: this.header.offsetHeight,
        footerHeight: this.footer.offsetHeight,
      },
      function() {
        this.setMainHeight();
      },
    );
  };

  setMainHeight = () => {
    const { headerHeight, footerHeight } = this.state;
    const mainHeight = this.props.viewport.height - headerHeight - footerHeight;
    this.setState({ mainHeight });
  };

  render() {
    const isLessThanMD = this.getIsLessThanMD();
    const { mainHeight } = this.state;

    return (
      <Fragment>
        <Header
          ref={el => {
            this.header = el;
          }}
        />
        <Navigation isLessThanMD={isLessThanMD} />
        <ErrorBoundary>
          {mainHeight !== undefined && mainHeight !== null && (
            <Main height={mainHeight}>{this.props.children}</Main>
          )}
        </ErrorBoundary>
        <Footer
          ref={el => {
            this.footer = el;
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
