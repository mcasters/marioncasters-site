/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';

import styleModal from '../../../modules_modifications/style-modal.css';
import styleLightbox from '../../../modules_modifications/style-lightbox.css';
import styleBurgerMenu from '../../../modules_modifications/style-burgerMenu.css';
import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Navigation from '../Navigation';
import LAYOUT_CONSTANTS from '../../constants/layoutConstants';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      isMobile: true,
    };
  }

  componentDidMount() {
    this.getIsMobile();
    window.addEventListener('resize', this.getIsMobile);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getIsMobile);
  }

  getIsMobile = () => {
    this.setState({
      isMobile: window.innerWidth < LAYOUT_CONSTANTS.BREAKPOINT.SM,
    });
  };

  render() {
    const { isMobile } = this.state;
    return (
      <div>
        <Header isMobile={isMobile} />
        <Navigation isMobile={isMobile} />
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
  styleLightbox,
  styleBurgerMenu,
  s,
)(Layout);
