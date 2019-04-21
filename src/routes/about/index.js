import React from 'react';

import Layout from '../../components/Layout';
import About from './About';
import ROOT_CONSTANTS from '../../constants/rootConstants';

function action() {
  const title = ROOT_CONSTANTS.TITLE.PRESENTATION;

  return {
    title,
    description: 'Présentation de Marion Casters',
    chunks: ['about'],
    component: (
      <Layout>
        <About title={title} />
      </Layout>
    ),
  };
}

export default action;
