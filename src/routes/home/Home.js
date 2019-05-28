import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './Home.css';
import Content from '../../components/Content';
import CONTENT_CONST from '../../constants/contentConstants';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;
    return (
      <div className={s.homeContainer}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.homeContent}>
          <Content keyContent={CONTENT_CONST.KEY.HOME3} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
