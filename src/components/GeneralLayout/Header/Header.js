import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import s from './Header.css';
import GLOB_CONST from '../../../constants/globalConstants';

class Header extends React.Component {
  static propTypes = {
    isHome: PropTypes.bool.isRequired,
    getHeight: PropTypes.func,
  };

  static defaultProps = {
    getHeight: null,
  };

  state = {
    isSticky: false,
  };

  componentDidMount() {
    this.updateScrolling();
    window.addEventListener('scroll', this.updateScrolling);
  }

  refCallback = element => {
    if (element) {
      this.props.getHeight(element.getBoundingClientRect().height);
    }
  };

  updateScrolling = () => {
    this.setState({
      isSticky: window.pageYOffset > 0,
    });
  };

  render() {
    const title = GLOB_CONST.SITE_TITLE;
    const { isHome, getHeight } = this.props;
    return isHome ? (
      <header>
        <div
          ref={getHeight !== null && this.refCallback}
          className={s.homeContainer}
        >
          <h1>{title}</h1>
        </div>
      </header>
    ) : (
      <header>
        <div
          className={
            this.state.isSticky
              ? `${s.container} ${s.sticky}`
              : `${s.container}`
          }
        >
          <h1>{title}</h1>
        </div>
      </header>
    );
  }
}
export default withStyles(s)(Header);
