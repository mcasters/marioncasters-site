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
    require.context('./../../../photoLibrary/sculpture', false, /\.jpe?g$/),
  );

  return {
    component: (
      <Layout>
        <SculpturesPage
          title={ITEM_CONSTANTS.TITLE.SCULPTURE}
          imagesList={allImages}
        />
      </Layout>
    ),
  };
}

export default action;
