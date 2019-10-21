import React from 'react';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './Page.css';

function Page({ title, html, showTitle }) {
  useStyles(s);
  return (
    <article className={s.pageContent}>
      <h1 className={showTitle ? '' : s.title}>{title}</h1>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  showTitle: PropTypes.bool.isRequired,
};

export default Page;
