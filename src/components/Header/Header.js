import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import PropTypes from 'prop-types';

import s from './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSticky: false,
    };
  }

  componentDidMount() {
    this.updateScrolling();
    window.addEventListener('scroll', this.updateScrolling);
  }

  updateScrolling = () => {
    this.setState({
      isSticky: window.pageYOffset > 0,
    });
  };

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
