import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Home;
