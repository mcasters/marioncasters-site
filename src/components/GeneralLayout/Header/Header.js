import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import s from './Header.css';

class Header extends React.Component {
  static propTypes = {
    getHeight: PropTypes.func.isRequired,
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
    return (
      <header>
        <div
          ref={this.refCallback}
          className={
            this.state.isSticky
              ? `${s.container} ${s.sticky}`
              : `${s.container}`
          }
        >
          <h1>Marion Casters</h1>
        </div>
      </header>
    );
  }
}
export default withStyles(s)(Header);
