import React from 'react';
import SculpturesPage from './SculpturesPage';
import ITEM from '../../constants/item';
import { DESCRIPTION } from '../../constants/metaHtml';
import Root from '../../components/LayoutRep/Root';

async function action() {
  const title = ITEM.SCULPTURE.TITLE;
  const description = DESCRIPTION.SCULPTURE;

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
