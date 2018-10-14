import React from 'react';
import PropTypes from 'prop-types';
import GLOBAL_CONSTANTS from '../../constants/globalConstants';

class NotFound extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{GLOBAL_CONSTANTS.NOT_FOUND}</p>
      </div>
    );
  }
}

export default NotFound;
