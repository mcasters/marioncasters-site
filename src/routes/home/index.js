import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action() {
  const title = 'Bienvenue';
  return {
    title,
    description: 'Présentation des oeuvres de Marion Casters',
    chunks: ['home'],
    component: (
      <Layout>
        <Home title={title} />
      </Layout>
    ),
  };
}

export default action;
