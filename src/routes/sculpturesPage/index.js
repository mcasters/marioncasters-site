import React from 'react';
import SculpturesPage from './SculpturesPage';
import Layout from '../../components/Layout';
// import { PATH_TO_PAINTING_IMAGES } from '../../constants';

async function action() {
  return {
    component: (
      <Layout>
        <SculpturesPage />
      </Layout>
    ),
  };
}

export default action;
