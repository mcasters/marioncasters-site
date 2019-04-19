import React from 'react';
import Layout from '../../components/Layout';
import About from './About';

function action() {
  const title = 'Présentation';
  return {
    description: 'Présentation de Marion Casters',
    chunks: ['about'],
    title,
    component: (
      <Layout>
        <About title={title} />
      </Layout>
    ),
  };
}

export default action;
