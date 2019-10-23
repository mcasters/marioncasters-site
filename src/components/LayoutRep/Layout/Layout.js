/* eslint-disable css-modules/no-unused-class */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';
import normalizeCss from '../../../../node_modules/normalize.css/normalize.css';

import styleModal from '../../../../modules_modifications/style-modal.css';
import styleTabs from '../../../../modules_modifications/style-tabs.css';
import styleDayPicker from '../../../../modules_modifications/style-dayPicker.css';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';
import Navigation from '../Navigation';
import LAYOUT_CONSTANTS from '../../../constants/layoutConstants';
import ErrorBoundary from '../../ErrorBoundary';
import AppContext from '../../../context';
import Main from '../Main';
import useViewport from '../../Hooks/useViewport';

function Layout({ children }) {
  useStyles(normalizeCss, styleModal, styleTabs, styleDayPicker, s);
  const { windowWidth, windowHeight } = useViewport();
  const [headerHeight, setHeaderHeight] = useState(0);
  const context = useContext(AppContext);

  const isHome = context.pathname === '/' || context.pathname === '/home';
  const isLessThanMD = windowWidth < LAYOUT_CONSTANTS.BREAKPOINT.MD;

  const getHeight = h => setHeaderHeight(h);

  const header = <Header isHome={isHome} onHeight={getHeight} />;
  const navigation = <Navigation isLessThanMD={isLessThanMD} isHome={isHome} />;
  const main = (
    <ErrorBoundary>
      <Main
        isHome={isHome}
        isLessThanMD={isLessThanMD}
        height={windowHeight}
        headerHeight={headerHeight}
      >
        {children}
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  viewport: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default Layout;
