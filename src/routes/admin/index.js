import React from 'react';

import Layout from '../../components/Layout';
import Admin from './Admin';
import query from './adminStatusQuery.graphql';

const title = 'Administration';

function action({ client }) {
  const { adminStatus } = client.readQuery({
    query,
  });
  const isAdmin = adminStatus.isConnected;
  if (!isAdmin) {
    return { redirect: '/login' };
  }

  return {
    chunks: ['admin'],
    title,
    component: (
      <Layout>
        <Admin title={title} />
      </Layout>
    ),
  };
}

export default action;
