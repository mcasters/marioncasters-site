import React from 'react';
import AddPainting from './AddPainting';
import Layout from './../../components/Layout';

const isAdmin = true;
const title = "Ajout d'une peinture";

async function action() {
  if (!isAdmin) {
    return { redirect: '/login' };
  }

  return {
    chunks: ['addPainting'],
    title,
    component: (
      <Layout>
        <AddPainting title={title} />
      </Layout>
    ),
  };
}

export default action;
