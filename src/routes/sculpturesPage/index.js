import React from 'react';
import SculpturesPage from './SculpturesPage';
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
    require.context('./../../../../photo-files/sculpture', false, /\.jpg$/),
  );
  const title = ITEM_CONSTANTS.TITLE.SCULPTURE;

  return {
    description: ITEM_CONSTANTS.META_DESCRIPTION.SCULPTURE,
    chunks: ['drawings'],
    component: (
      <Layout>
        <SculpturesPage title={title} allImages={allImages} />
      </Layout>
    ),
  };
}

export default action;
