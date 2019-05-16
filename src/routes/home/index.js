import React from 'react';
import Home from './Home';
import Layout from '../../components/GeneralLayout/Layout';
import CONTENT_CONSTANTS from '../../constants/contentConstants';
import META_HTML_CONSTANTS from '../../constants/metaHtmlConstants';

async function action() {
  const title = CONTENT_CONSTANTS.TITLE.HOME;
  const description = META_HTML_CONSTANTS.META_DESCRIPTION.HOME;

  return {
    title,
    description,
    chunks: ['home'],
    component: (
      <Layout>
        <Home title={title} />
      </Layout>
    ),
  };
}

export default action;
