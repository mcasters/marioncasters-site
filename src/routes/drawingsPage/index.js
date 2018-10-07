import React from 'react';
import DrawingsPage from './DrawingsPage';
import Layout from '../../components/Layout';
import { ITEM_CONSTANTS } from '../../constants';

async function action() {
  return {
    component: (
      <Layout>
        <DrawingsPage title={ITEM_CONSTANTS.TITLE.DRAWING} />
      </Layout>
    ),
  };
}

export default action;
