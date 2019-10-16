import React from 'react';
import SculpturesPage from './SculpturesPage';
import ITEM_CONST from '../../constants/itemConstants';
import META_HTML_CONST from '../../constants/metaHtmlConstants';
import Root from '../../components/LayoutRep/Root';

async function action() {
  const title = ITEM_CONST.SCULPTURE.TITLE;
  const description = META_HTML_CONST.META_DESCRIPTION.SCULPTURE;

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
