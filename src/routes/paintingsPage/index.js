import React from 'react';
import PaintingsPage from './PaintingsPage';
import ITEM_CONSTANTS from '../../constants/itemConstants';
import META_HTML_CONSTANTS from '../../constants/metaHtmlConstants';
import Root from '../../components/GeneralLayout/Root';

async function action() {
  const title = ITEM_CONSTANTS.TITLE.PAINTING;
  const description = META_HTML_CONSTANTS.META_DESCRIPTION.PAINTING;

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
