import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import history from '../../../../history';
import s from './DesktopNav.css';
import Link from '../../../Link';
import logoUrl from '../logo-45.png';
import logoUrl2x from '../logo-100.png';
import ROUTER_CONSTANTS from '../../../../constants/routerConstants';

class DesktopNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    return (
      <aside>
        <div className={s.bar} />
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

export default withStyles(s)(DesktopNav);
