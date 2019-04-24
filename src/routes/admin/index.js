import React from 'react';

import Layout from '../../components/Layout';
import Admin from './Admin';
import query from './adminStatusQuery.graphql';
import ROOT_CONSTANTS from '../../constants/rootConstants';

function action({ client }) {
  const title = ROOT_CONSTANTS.TITLE.ADMINISTRATION;

  const { adminStatus } = client.readQuery({
    query,
  });
  const isAdmin = adminStatus.isConnected;

  if (!isAdmin) {
    return { redirect: '/home' };
  }

  return {
    title,
    description: 'Administration du site',
    chunks: ['admin'],
    component: (
      <Layout>
        <Admin title={title} />
      </Layout>
    ),
  };
}

export default action;
