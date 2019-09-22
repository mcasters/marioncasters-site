import React from 'react';
import SculpturesPage from './SculpturesPage';
import ITEM_CONSTANTS from '../../constants/itemConstants';
import META_HTML_CONSTANTS from '../../constants/metaHtmlConstants';
import Root from '../../components/GeneralLayout/Root';

async function action() {
  const title = ITEM_CONSTANTS.TITLE.SCULPTURE;
  const description = META_HTML_CONSTANTS.META_DESCRIPTION.SCULPTURE;

  return {
    title,
    description,
    chunks: ['drawings'],
    component: (
      <Root>
        <SculpturesPage title={title} />
      </Root>
    ),
  };
}

export default action;
