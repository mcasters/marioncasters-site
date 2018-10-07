import React from 'react';
import PaintingsPage from './PaintingsPage';
import Layout from '../../components/Layout';
// import { PATH_TO_PAINTING_IMAGES } from '../../constants';

async function action() {
  return {
    component: (
      <Layout>
        <PaintingsPage />
      </Layout>
    ),
  };
}

export default action;
