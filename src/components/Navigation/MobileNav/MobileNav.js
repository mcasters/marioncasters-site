import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { slide as BurgerMenu } from 'react-burger-menu';

import s from './MobileNav.css';
import Link from '../../Link';
import logoUrl from '../logo-45.png';
import logoUrl2x from '../logo-100.png';
import ROOT_CONSTANTS from '../../../constants/rootConstants';

class MobileNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  handleStateChange(state) {
    this.setState({ isMenuOpen: state.isMenuOpen });
  }

  render() {
    return (
      <BurgerMenu
        isOpen={this.state.isMenuOpen}
        width={280}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link to={ROOT_CONSTANTS.ROOT.PRESENTATION} onClick={this.closeMenu}>
          Présentation
        </Link>
        <Link to={ROOT_CONSTANTS.ROOT.PEINTURES} onClick={this.closeMenu}>
          Peintures
        </Link>
        <Link to={ROOT_CONSTANTS.ROOT.SCULPTURES} onClick={this.closeMenu}>
          Sculptures
        </Link>
        <Link to={ROOT_CONSTANTS.ROOT.DESSINS} onClick={this.closeMenu}>
          Dessins
        </Link>
        <Link to={ROOT_CONSTANTS.ROOT.CONTACT} onClick={this.closeMenu}>
          Contact
        </Link>
        <Link
          className={s.linkHome}
          to={ROOT_CONSTANTS.ROOT.HOME}
          onClick={this.closeMenu}
        >
          <img
            src={logoUrl}
            srcSet={`${logoUrl2x} 2x`}
            alt="Signature de Marion Casters"
          />
        </Link>
        <p className={s.title}>Marion Casters</p>
      </BurgerMenu>
    );
  }
}

export default withStyles(s)(MobileNav);
