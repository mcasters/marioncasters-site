import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './About.css';
import Presentation from '../../components/Presentation';

class About extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const title = this.props.title; // eslint-disable-line prefer-destructuring
    return (
      <div>
        <h1 className={s.title}>{title}</h1>
        <Presentation />
      </div>
    );
  }
}

export default withStyles(s)(About);
