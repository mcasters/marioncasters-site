import React from 'react';
import DrawingsPage from './DrawingsPage';
import ITEM_CONST from '../../constants/itemConstants';
import META_HTML_CONST from '../../constants/metaHtmlConstants';
import Root from '../../components/LayoutRep/Root';

async function action() {
  const title = ITEM_CONST.DRAWING.TITLE;
  const description = META_HTML_CONST.META_DESCRIPTION.DRAWING;

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
