/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import { slide as BurgerMenu } from 'react-burger-menu';

import history from '../../history';
import s from './Navigation.css';
import Link from '../Link';
import logoUrl from './logo-45.png';
import logoUrl2x from './logo-100.png';

class Navigation extends React.Component {
  static propTypes = {
    isMobile: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      location: '',
    };
  }

  componentDidMount() {
    this.updateLocation();
    history.listen(() => {
      this.updateLocation();
    });
  }

  updateLocation = () => {
    this.setState({
      location: window.location.pathname,
    });
  };

  handleStateChange(state) {
    this.setState({ isMenuOpen: state.isMenuOpen });
  }

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { isMobile } = this.props;

    if (isMobile) {
      return (
        <BurgerMenu
          isOpen={this.state.isMenuOpen}
          width={280}
          onStateChange={state => this.handleStateChange(state)}
        >
          <Link to="/presentation" onClick={this.closeMenu}>
            Présentation
          </Link>
          <Link to="/peintures" onClick={this.closeMenu}>
            Peintures
          </Link>
          <Link to="/sculptures" onClick={this.closeMenu}>
            Sculptures
          </Link>
          <Link to="/dessins" onClick={this.closeMenu}>
            Dessins
          </Link>
          <Link to="/contact" onClick={this.closeMenu}>
            Contact
          </Link>
          <Link to="/" onClick={this.closeMenu}>
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
    return (
      <aside>
        <div className={s.bar} />
        <nav>
          <Link
            className={
              this.state.location === '/presentation'
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to="/presentation"
          >
            Présentation
          </Link>
          <Link
            className={
              this.state.location === '/peintures'
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to="/peintures"
          >
            Peintures
          </Link>
          <Link
            className={
              this.state.location === '/sculptures'
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to="/sculptures"
          >
            Sculptures
          </Link>
          <Link
            className={
              this.state.location === '/dessins'
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to="/dessins"
          >
            Dessins
          </Link>
          <Link
            className={
              this.state.location === '/contact'
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to="/contact"
          >
            Contact
          </Link>
          <Link className={s.linkHome} to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              alt="Signature de Marion Casters"
            />
          </Link>
        </nav>
      </aside>
    );
  }
}

export default withStyles(s)(Navigation);
