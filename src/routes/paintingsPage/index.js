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
    require.context('./../../../photoLibrary/painting', false, /\.jpe?g$/),
  );

  return {
    component: (
      <Layout>
        <PaintingsPage
          title={ITEM_CONSTANTS.TITLE.PAINTING}
          imagesList={allImages}
        />
      </Layout>
    ),
  };
}

export default action;
