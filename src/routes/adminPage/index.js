import React from 'react';

import Layout from '../../components/GeneralLayout/Layout';
import AdminPage from './AdminPage';
import GET_ADMIN_STATUS_QUERY from '../../data/graphql/queries/getAdminStatusQuery.graphql';
import ROUTER_CONSTANTS from '../../constants/routerConstants';
import META_CONSTANTS from '../../constants/metaHtmlConstants';

function action({ client }) {
  const title = ROUTER_CONSTANTS.TITLE.ADMINISTRATION;
  const description = META_CONSTANTS.META_DESCRIPTION.ADMIN;

  const { adminStatus } = client.readQuery({
    query: GET_ADMIN_STATUS_QUERY,
  });

  if (!adminStatus.isConnected) {
    return { redirect: '/home' };
  }

  return {
    title,
    description,
    chunks: ['admin'],
    component: (
      <Layout>
        <AdminPage title={title} />
      </Layout>
    ),
  };
}

export default action;
