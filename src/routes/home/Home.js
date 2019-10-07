import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './Home.css';
import Content from '../../components/Content';
import CONTENT_CONST from '../../constants/contentConstants';

function Home({ title }) {
  return (
    <div className={s.homeContainer}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.homeContent}>
        <Content keyContent={CONTENT_CONST.KEY.HOME3} />
      </div>
    </div>
  );
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(Home);
