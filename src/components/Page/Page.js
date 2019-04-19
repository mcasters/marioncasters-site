import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Page.css';

class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;
    return (
      <article>
        <h1>{title}</h1>
        <div className={s.pageContent} />
      </article>
    );
  }
}

export default withStyles(s)(Page);
