import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Header.css';

class Header extends React.Component {
  state = {
    isSticky: false,
  };

  componentDidMount() {
    // eslint-disable-next-line no-unused-vars
    window.addEventListener('scroll', event => {
      this.setState({
        isSticky: window.pageYOffset > 0,
      });
    });
  }

  render() {
    return (
      <header>
        <div
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
