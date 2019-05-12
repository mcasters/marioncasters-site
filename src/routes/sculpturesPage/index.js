import React from 'react';
import SculpturesPage from './SculpturesPage';
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
    require.context('./../../../../../photo-files/sculptures', false, /\.jpg$/),
  );
  const title = ITEM_CONSTANTS.TITLE.SCULPTURE;

  return {
    title,
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
