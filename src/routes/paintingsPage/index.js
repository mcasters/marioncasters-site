import React from 'react';
import PaintingsPage from './PaintingsPage';
import ITEM_CONST from '../../constants/itemConstants';
import META_HTML_CONST from '../../constants/metaHtmlConstants';
import Root from '../../components/LayoutRep/Root';

async function action() {
  const title = ITEM_CONST.PAINTING.TITLE;
  const description = META_HTML_CONST.META_DESCRIPTION.PAINTING;

  return {
    title,
    description,
    chunks: ['paintings'],
    component: (
      <Root>
        <PaintingsPage title={title} />
      </Root>
    ),
  };
}

export default action;
