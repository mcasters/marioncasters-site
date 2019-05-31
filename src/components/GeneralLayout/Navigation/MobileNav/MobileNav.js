import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { slide as BurgerMenu } from 'react-burger-menu';

import s from './MobileNav.css';
import Link from '../../../Link';
import logoUrl from '../logo-45.png';
import logoUrl2x from '../logo-100.png';
import ROUTER_CONSTANTS from '../../../../constants/routerConstants';

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
        width={250}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link
          to={ROUTER_CONSTANTS.ROUTER.PRESENTATION}
          onClick={this.closeMenu}
        >
          Présentation
        </Link>
        <Link to={ROUTER_CONSTANTS.ROUTER.PEINTURES} onClick={this.closeMenu}>
          Peintures
        </Link>
        <Link to={ROUTER_CONSTANTS.ROUTER.SCULPTURES} onClick={this.closeMenu}>
          Sculptures
        </Link>
        <Link to={ROUTER_CONSTANTS.ROUTER.DESSINS} onClick={this.closeMenu}>
          Dessins
        </Link>
        <Link to={ROUTER_CONSTANTS.ROUTER.CONTACT} onClick={this.closeMenu}>
          Contact
        </Link>
        <Link
          className={s.navHomeLink}
          to={ROUTER_CONSTANTS.ROUTER.HOME}
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
