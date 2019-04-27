import React from 'react';

import Layout from '../../components/Layout';
import ROOT_CONSTANTS from '../../constants/rootConstants';
import PresentationPage from './PresentationPage';

function action() {
  const title = ROOT_CONSTANTS.TITLE.PRESENTATION;

  return {
    title,
    description: 'Présentation de Marion Casters',
    chunks: ['presentation'],
    component: (
      <Layout>
        <PresentationPage title={title} />
      </Layout>
    ),
  };
}

export default action;
