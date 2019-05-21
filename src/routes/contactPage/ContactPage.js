import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import contentConstants from '../../constants/contentConstants';
import s from './ContactPage.css';
import Content from '../../components/Content';

class ContactPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const CONTENT_CONSTANTS = contentConstants;
    const { title } = this.props;

    return (
      <article>
        <h1 className={s.title}>{title}</h1>
        <div className={s.contactContent}>
          <Content keyContent={CONTENT_CONSTANTS.KEY.CONTACT_ADDRESS} />
        </div>
        <div className={s.contactContent}>
          <Content keyContent={CONTENT_CONSTANTS.KEY.CONTACT_PHONE} />
        </div>
        <div className={s.contactContent}>
          <Content keyContent={CONTENT_CONSTANTS.KEY.CONTACT_EMAIL} />
        </div>
      </article>
    );
  }
}

export default withStyles(s)(ContactPage);
