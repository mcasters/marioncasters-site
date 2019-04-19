import React from 'react';
import PropTypes from 'prop-types';

import Presentation from '../../components/Presentation';

class About extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Presentation />
      </div>
    );
  }
}

export default About;
