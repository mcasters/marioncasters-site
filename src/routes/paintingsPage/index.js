import React from 'react';
import PaintingsPage from './PaintingsPage';
import Layout from '../../components/Layout';
import ITEM_CONSTANTS from '../../constants/itemConstants';

async function action() {
  function importAllImages(r) {
    const images = {};
    r.keys().forEach(item => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  const allImages = importAllImages(
    require.context('./../../../../photo-files/painting', false, /\.jpe?g$/),
  );
  const title = ITEM_CONSTANTS.TITLE.PAINTING;

  return {
    description: ITEM_CONSTANTS.META_DESCRIPTION.PAINTING,
    chunks: ['paintings'],
    component: (
      <Layout>
        <PaintingsPage title={title} imagesList={allImages} />
      </Layout>
    ),
  };
}

export default action;
