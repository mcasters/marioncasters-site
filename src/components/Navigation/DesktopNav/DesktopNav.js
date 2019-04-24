import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import history from '../../../history';
import s from './DesktopNav.css';
import Link from '../../Link';
import logoUrl from '../logo-45.png';
import logoUrl2x from '../logo-100.png';
import ROOT_CONSTANTS from '../../../constants/rootConstants';

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
              this.state.location === ROOT_CONSTANTS.ROOT.PRESENTATION
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to={ROOT_CONSTANTS.ROOT.PRESENTATION}
          >
            Présentation
          </Link>
          <Link
            className={
              this.state.location === ROOT_CONSTANTS.ROOT.PEINTURES
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to={ROOT_CONSTANTS.ROOT.PEINTURES}
          >
            Peintures
          </Link>
          <Link
            className={
              this.state.location === ROOT_CONSTANTS.ROOT.SCULPTURES
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to={ROOT_CONSTANTS.ROOT.SCULPTURES}
          >
            Sculptures
          </Link>
          <Link
            className={
              this.state.location === ROOT_CONSTANTS.ROOT.DESSINS
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to={ROOT_CONSTANTS.ROOT.DESSINS}
          >
            Dessins
          </Link>
          <Link
            className={
              this.state.location === ROOT_CONSTANTS.ROOT.CONTACT
                ? `${s.link} ${s.active}`
                : `${s.link}`
            }
            to={ROOT_CONSTANTS.ROOT.CONTACT}
          >
            Contact
          </Link>
          <Link className={s.linkHome} to={ROOT_CONSTANTS.ROOT.HOME}>
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
