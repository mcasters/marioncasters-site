import React from 'react';
import PaintingsPage from './PaintingsPage';
import ITEM from '../../constants/item';
import { DESCRIPTION } from '../../constants/metaHtml';
import Root from '../../components/LayoutRep/Root';

async function action() {
  const title = ITEM.PAINTING.TITLE;
  const description = DESCRIPTION.PAINTING;

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
