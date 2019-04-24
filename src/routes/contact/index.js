import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import contact from './contact.md';
import ROOT_CONSTANTS from '../../constants/rootConstants';

function action() {
  const title = ROOT_CONSTANTS.TITLE.CONTACT;

  return {
    title,
    description:
      'Contacter Marion Casters pour obtenir des renseignements sur ses oeuvres',
    chunks: ['contact'],
    component: (
      <Layout>
        <Page {...contact} showTitle={false} />
      </Layout>
    ),
  };
}

export default action;
