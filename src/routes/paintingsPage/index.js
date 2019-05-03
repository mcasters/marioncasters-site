import React from 'react';
import PaintingsPage from './PaintingsPage';
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
    require.context('./../../../../photo-files/paintings', false, /\.jpg$/),
  );
  const title = ITEM_CONSTANTS.TITLE.PAINTING;

  return {
    title,
    description: ITEM_CONSTANTS.META_DESCRIPTION.PAINTING,
    chunks: ['paintings'],
    component: (
      <Layout>
        <PaintingsPage title={title} allImages={allImages} />
      </Layout>
    ),
  };
}

export default action;
