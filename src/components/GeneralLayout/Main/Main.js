import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import s from './Main.css';

class Main extends React.Component {
  static propTypes = {
    isHome: PropTypes.bool.isRequired,
    isLessThanMD: PropTypes.bool.isRequired,
    height: PropTypes.number.isRequired,
    headerHeight: PropTypes.number,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    headerHeight: 0,
  };

  state = { height: 0 };

  componentDidMount = () => {
    const { height } = this.props;
    if (this.state !== height) this.setState({ height });
  };

  render() {
    const { isHome, isLessThanMD, height, headerHeight, children } = this.props;
    if (this.state.height !== height) this.setState({ height });
    const adaptedHeight = isLessThanMD
      ? height - headerHeight
      : this.state.height;

    return isHome ? (
      <main className={s.mainHome} style={{ height: adaptedHeight }}>
        {children}
      </main>
    ) : (
      <main className={s.main}>{children}</main>
    );
  }
}
export default withStyles(s)(Main);
