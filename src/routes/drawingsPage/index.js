import React from 'react';
import DrawingsPage from './DrawingsPage';
import ITEM_CONSTANTS from '../../constants/itemConstants';
import META_HTML_CONSTANTS from '../../constants/metaHtmlConstants';
import Root from '../../components/LayoutRep/Root';

async function action() {
  const title = ITEM_CONSTANTS.TITLE.DRAWING;
  const description = META_HTML_CONSTANTS.META_DESCRIPTION.DRAWING;

  return {
    title,
    description,
    chunks: ['drawings'],
    component: (
      <Root>
        <DrawingsPage title={title} />
      </Root>
    ),
  };
}

export default action;
