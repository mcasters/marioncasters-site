import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import history from '../../../../history';
import s from './DesktopNav.css';
import Link from '../../../Link';
import logoUrl2x from '../logo-100.png';
import ROUTER_CONSTANTS from '../../../../constants/routerConstants';

class DesktopNav extends React.Component {
  static propTypes = {
    isHome: PropTypes.bool.isRequired,
  };

  state = {
    location: '',
  };

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

  render() {
    const { isHome } = this.props;

    return (
      <aside>
        <div className={isHome ? [s.bar, s.homeBar].join(' ') : s.bar} />
        <nav>
          <Link
            className={
              this.state.location === ROUTER_CONSTANTS.ROUTER.PRESENTATION
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to={ROUTER_CONSTANTS.ROUTER.PRESENTATION}
          >
            Présentation
          </Link>
          <Link
            className={
              this.state.location === ROUTER_CONSTANTS.ROUTER.PEINTURES
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to={ROUTER_CONSTANTS.ROUTER.PEINTURES}
          >
            Peintures
          </Link>
          <Link
            className={
              this.state.location === ROUTER_CONSTANTS.ROUTER.SCULPTURES
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to={ROUTER_CONSTANTS.ROUTER.SCULPTURES}
          >
            Sculptures
          </Link>
          <Link
            className={
              this.state.location === ROUTER_CONSTANTS.ROUTER.DESSINS
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to={ROUTER_CONSTANTS.ROUTER.DESSINS}
          >
            Dessins
          </Link>
          <Link
            className={
              this.state.location === ROUTER_CONSTANTS.ROUTER.CONTACT
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to={ROUTER_CONSTANTS.ROUTER.CONTACT}
          >
            Contact
          </Link>
          <Link className={s.linkHome} to={ROUTER_CONSTANTS.ROUTER.HOME}>
            <img src={logoUrl2x} alt="Signature de Marion Casters" />
          </Link>
        </nav>
      </aside>
    );
  }
}

export default withStyles(s)(DesktopNav);
