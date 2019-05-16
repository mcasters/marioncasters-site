import React from 'react';
import Layout from '../../components/GeneralLayout/Layout';
import CONTENT_CONSTANTS from '../../constants/contentConstants';
import ContactPage from './ContactPage';

function action() {
  const title = CONTENT_CONSTANTS.TITLE.CONTACT;
  const description = CONTENT_CONSTANTS.META_DESCRIPTION.CONTACT;

  return {
    title,
    description,
    chunks: ['contact'],
    component: (
      <Layout>
        <ContactPage title={title} />
      </Layout>
    ),
  };
}

export default action;
