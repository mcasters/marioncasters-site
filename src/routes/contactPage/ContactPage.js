import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import CONT_CONST from '../../constants/content';
import s from './ContactPage.css';
import Content from '../../components/Content';

function ContactPage({ title }) {
  return (
    <article>
      <h1 className={s.title}>{title}</h1>
      <div className={s.contactContent}>
        <Content keyContent={CONT_CONST.KEY.CONTACT_ADDRESS} />
      </div>
      <div className={s.contactContent}>
        <Content keyContent={CONT_CONST.KEY.CONTACT_PHONE} />
      </div>
      <div className={s.contactContent}>
        <Content keyContent={CONT_CONST.KEY.CONTACT_EMAIL} />
      </div>
    </article>
  );
}

ContactPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(ContactPage);
