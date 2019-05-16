import React from 'react';
import SculpturesPage from './SculpturesPage';
import Layout from '../../components/GeneralLayout/Layout';
import ITEM_CONSTANTS from '../../constants/itemConstants';
import META_HTML_CONSTANTS from '../../constants/metaHtmlConstants';

async function action() {
  const title = ITEM_CONSTANTS.TITLE.SCULPTURE;
  const description = META_HTML_CONSTANTS.META_DESCRIPTION.SCULPTURE;

  return {
    title,
    description,
    chunks: ['drawings'],
    component: (
      <Layout>
        <SculpturesPage title={title} />
      </Layout>
    ),
  };
}

export default action;
