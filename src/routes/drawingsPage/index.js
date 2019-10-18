import React from 'react';
import DrawingsPage from './DrawingsPage';
import ITEM from '../../constants/item';
import { DESCRIPTION } from '../../constants/metaHtml';
import Root from '../../components/LayoutRep/Root';

async function action() {
  const title = ITEM.DRAWING.TITLE;
  const description = DESCRIPTION.DRAWING;

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
