import React from 'react';
import CONTENT_CONSTANTS from '../../constants/contentConstants';
import META_HTML_CONSTANTS from '../../constants/metaHtmlConstants';
import ContactPage from './ContactPage';
import Root from '../../components/GeneralLayout/Root';

function action() {
  const title = CONTENT_CONSTANTS.TITLE.CONTACT;
  const description = META_HTML_CONSTANTS.META_DESCRIPTION.CONTACT;

  return {
    title,
    description,
    chunks: ['contact'],
    component: (
      <Root>
        <ContactPage title={title} />
      </Root>
    ),
  };
}

export default action;
