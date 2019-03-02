import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>home</p>
      </div>
    );
  }
}

export default Home;
