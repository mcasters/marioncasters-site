import React from 'react';

import TITLE from '../../constants/pageTitle';
import { DESCRIPTION } from '../../constants/metaHtml';
import PresentationPage from './PresentationPage';
import Root from '../../components/LayoutRep/Root';

function action() {
  const title = TITLE.PRESENTATION;
  const description = DESCRIPTION.PRESENTATION;

  return {
    title,
    description,
    chunks: ['presentation'],
    component: (
      <Root>
        <PresentationPage title={title} />
      </Root>
    ),
  };
}

export default action;
