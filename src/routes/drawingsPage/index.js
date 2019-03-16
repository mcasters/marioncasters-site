import React from 'react';
import DrawingsPage from './DrawingsPage';
import Layout from '../../components/Layout';
import ITEM_CONSTANTS from '../../constants/itemConstants';

async function action() {
  function importAllImages(r) {
    const images = new Map();
    r.keys().forEach(item => {
      images.set(item.replace('./', ''), r(item));
    });
    return images;
  }

  const allImages = importAllImages(
    require.context('./../../../../photo-files/drawing', false, /\.jpg$/),
  );
  const title = ITEM_CONSTANTS.TITLE.DRAWING;

  return {
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
