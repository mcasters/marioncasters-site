import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './Home.css';
import Content from '../../components/Content';
import contentConstnats from '../../constants/contentConstants';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const CONTENT_CONSTANTS = contentConstnats;
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <div className={s.content}>
          <Content keyContent={CONTENT_CONSTANTS.KEY.HOME1} />
        </div>
        <div className={s.content}>
          <Content keyContent={CONTENT_CONSTANTS.KEY.HOME2} />
        </div>
        <div className={s.content}>
          <Content keyContent={CONTENT_CONSTANTS.KEY.HOME3} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
