import React from 'react';
import DrawingsPage from './DrawingsPage';
import Layout from '../../components/GeneralLayout/Layout';
import ITEM_CONSTANTS from '../../constants/itemConstants';

function importAllImages(r) {
  const images = new Map();
  r.keys().forEach(item => {
    images.set(item.replace('./', ''), r(item));
  });
  return images;
}

async function action() {
  const allImages = importAllImages(
    require.context('./../../../../photo-files/drawings', false, /\.jpg$/),
  );
  const title = ITEM_CONSTANTS.TITLE.DRAWING;

  return {
    title,
    description: ITEM_CONSTANTS.META_DESCRIPTION.DRAWING,
    chunks: ['drawings'],
    component: (
      <Layout>
        <DrawingsPage title={title} allImages={allImages} />
      </Layout>
    ),
  };
}

export default action;
