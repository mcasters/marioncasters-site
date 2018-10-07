/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';

import styles from '../../../modules_modifications/style-modal.css';
import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Navigation from '../Navigation';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <main>{this.props.children}</main>
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default withStyles(normalizeCss, styles, s)(Layout);
