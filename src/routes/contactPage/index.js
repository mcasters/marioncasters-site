import React from 'react';
import Layout from '../../components/GeneralLayout/Layout';
import ROOT_CONSTANTS from '../../constants/rootConstants';
import ContactPage from './ContactPage';

function action() {
  const title = ROOT_CONSTANTS.TITLE.CONTACT;

  return {
    title,
    description:
      'Contacter Marion Casters pour obtenir des renseignements sur ses oeuvres',
    chunks: ['contact'],
    component: (
      <Layout>
        <ContactPage title={title} />
      </Layout>
    ),
  };
}

export default action;
