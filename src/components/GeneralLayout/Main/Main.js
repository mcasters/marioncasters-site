import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import s from './Main.css';

class Main extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.number,
  };

  static defaultProps = {
    height: 0,
  };

  render() {
    const { height } = this.props;

    return height > 0 ? (
      <main className={s.mainHome} style={{ height }}>
        {this.props.children}
      </main>
    ) : (
      <main className={s.main}>{this.props.children}</main>
    );
  }
}
export default withStyles(s)(Main);
