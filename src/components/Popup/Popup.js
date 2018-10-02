import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';

import s from './Popup.css';

class Popup extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    isError: PropTypes.bool.isRequired,
  };

  render() {
    const errorPopup = this.props.isError;

    return errorPopup ? (
      <div className={s.containerError}>
        <p>{this.props.message}</p>
      </div>
    ) : (
      <div className={s.container}>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default withStyles(s)(Popup);
