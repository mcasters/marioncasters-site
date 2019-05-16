import React from 'react';
import PaintingsPage from './PaintingsPage';
import Layout from '../../components/GeneralLayout/Layout';
import ITEM_CONSTANTS from '../../constants/itemConstants';

async function action() {
  const title = ITEM_CONSTANTS.TITLE.PAINTING;
  const description = ITEM_CONSTANTS.META_DESCRIPTION.PAINTING;

  return {
    title,
    description,
    chunks: ['paintings'],
    component: (
      <Layout>
        <PaintingsPage title={title} />
      </Layout>
    ),
  };
}

export default action;
