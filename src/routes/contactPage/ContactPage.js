import React from 'react';
import PropTypes from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';

import CONT_CONST from '../../constants/content';
import GLOB_CONST from '../../constants/globalConstants';
import s from './ContactPage.css';
import Content from '../../components/Content';

function ContactPage({ title }) {
  useStyles(s);

  const email = GLOB_CONST.EMAIL;
  return (
    <address>
      <h1 className={s.title}>{title}</h1>
      <div className={s.contactContent}>
        <Content keyContent={CONT_CONST.KEY.CONTACT_ADDRESS} />
      </div>
      <div className={s.contactContent}>
        <Content keyContent={CONT_CONST.KEY.CONTACT_PHONE} />
      </div>
      <div className={s.contactContent}>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </address>
  );
}

ContactPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContactPage;
