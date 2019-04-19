import React from 'react';
import Layout from '../../components/Layout';
import About from './About';
import CONTENT_CONSTANTS from '../../constants/contentConstants';

function action() {
  const title = CONTENT_CONSTANTS.TITLE.PRESENTATION;

  return {
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
