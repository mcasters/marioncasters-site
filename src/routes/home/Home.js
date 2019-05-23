import React, { Fragment } from 'react';
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
      <Fragment>
        <h1 className={s.title}>{title}</h1>
        <div className={s.content}>
          <Content keyContent={CONTENT_CONST.KEY.HOME1} />
        </div>
        <div className={s.content}>
          <Content keyContent={CONTENT_CONST.KEY.HOME2} />
        </div>
        <div className={s.content}>
          <Content keyContent={CONTENT_CONST.KEY.HOME3} />
        </div>
      </Fragment>
    );
  }
}

export default withStyles(s)(Home);
