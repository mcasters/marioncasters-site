import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import contact from './contact.md';

function action() {
  return {
    title: 'Contactez moi',
    description:
      'Contacter Marion Casters pour obtenir des renseignements sur ses oeuvres',
    chunks: ['contact'],
    component: (
      <Layout>
        <Page {...contact} />
      </Layout>
    ),
  };
}

export default action;
