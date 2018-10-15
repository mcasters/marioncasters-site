import React from 'react';
import DrawingsPage from './DrawingsPage';
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
    require.context('./../../../photoLibrary/drawing', false, /\.jpe?g$/),
  );

  return {
    title: 'Dessins',
    description:
      'Images et descriptions des dessins de femmes de Marion Casters',
    chunks: ['drawings'],
    component: (
      <Layout>
        <DrawingsPage
          title={ITEM_CONSTANTS.TITLE.DRAWING}
          imagesList={allImages}
        />
      </Layout>
    ),
  };
}

export default action;
