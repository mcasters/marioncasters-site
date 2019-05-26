import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import s from './Main.css';
import AppContext from '../../../context';

class Main extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.number.isRequired,
  };

  static contextType = AppContext;

  render() {
    const isHome =
      this.context.pathname === '/' || this.context.pathname === '/home';
    const { height } = this.props;

    return (
      <main className={isHome ? s.mainHome : s.main} style={{ height }}>
        {this.props.children}
      </main>
    );
  }
}
export default withStyles(s)(Main);
