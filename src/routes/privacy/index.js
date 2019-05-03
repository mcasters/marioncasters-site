import React from 'react';

import Layout from '../../components/GeneralLayout/Layout';
import Page from '../../components/GeneralLayout/Page';
import privacy from './privacy.md';

function action() {
  return {
    title: privacy.title,
    chunks: ['privacy'],
    component: (
      <Layout>
        <Page {...privacy} showTitle />
      </Layout>
    ),
  };
}

export default action;
