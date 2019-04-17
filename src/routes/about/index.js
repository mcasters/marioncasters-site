import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';

function action() {
  const title = 'Présentation';
  return {
    description: 'Présentation de Marion Casters',
    chunks: ['about'],
    title,
    component: (
      <Layout>
        <Page title={title} />
      </Layout>
    ),
  };
}

export default action;
