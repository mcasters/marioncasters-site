import React from 'react';

import Layout from '../../components/GeneralLayout/Layout';
import Page from '../../components/GeneralLayout/Page';
import CONTENT_CONSTANTS from '../../constants/contentConstants';
import privacy from './privacy.md';

function action() {
  const { title } = privacy;
  const description = CONTENT_CONSTANTS.META_DESCRIPTION.PRIVACY;

  return {
    title,
    description,
    chunks: ['privacy'],
    component: (
      <Layout>
        <Page {...privacy} showTitle />
      </Layout>
    ),
  };
}

export default action;
