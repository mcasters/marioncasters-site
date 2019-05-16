import React from 'react';
import Home from './Home';
import Layout from '../../components/GeneralLayout/Layout';
import CONTENT_CONSTANTS from '../../constants/contentConstants';

async function action() {
  const title = CONTENT_CONSTANTS.TITLE.HOME;
  const description = CONTENT_CONSTANTS.META_DESCRIPTION.HOME;

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
