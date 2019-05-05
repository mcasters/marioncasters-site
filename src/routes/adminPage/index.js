import React from 'react';

import Layout from '../../components/GeneralLayout/Layout';
import AdminPage from './AdminPage';
import GET_ADMIN_STATUS_QUERY from '../../data/graphql/queries/getAdminStatusQuery.graphql';
import ROOT_CONSTANTS from '../../constants/rootConstants';

function action({ client }) {
  const title = ROOT_CONSTANTS.TITLE.ADMINISTRATION;

  const { adminStatus } = client.readQuery({
    query: GET_ADMIN_STATUS_QUERY,
  });

  if (!adminStatus.isConnected) {
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
