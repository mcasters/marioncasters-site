import React from 'react';

import Layout from '../../components/Layout';
import AdminPage from './AdminPage';
import query from '../../data/graphql/queries/adminStatusQuery.graphql';
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
        <AdminPage title={title} />
      </Layout>
    ),
  };
}

export default action;
