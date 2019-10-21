import React from 'react';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';

import CONT_CONST from '../../constants/content';
import s from './ContactPage.css';
import Content from '../../components/Content';

function ContactPage({ title }) {
  useStyles(s);
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

export default ContactPage;
