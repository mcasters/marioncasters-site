import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './Page.css';

class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
    showTitle: PropTypes.bool.isRequired,
  };

  render() {
    const { title, html, showTitle } = this.props;
    return (
      <article>
        <h1 className={showTitle ? '' : s.title}>{title}</h1>
        <div
          className={s.pageContent}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    );
  }
}

export default withStyles(s)(Page);
