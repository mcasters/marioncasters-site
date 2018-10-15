import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import contact from './contact.md';

function action() {
  return {
    title: 'Contactez moi',
    description: 'Obtenir des renseignements sur les oeuvres de Marion Casters',
    chunks: ['contact'],
    component: (
      <Layout>
        <Page {...contact} />
      </Layout>
    ),
  };
}

export default action;
