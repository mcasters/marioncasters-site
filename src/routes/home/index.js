import React from 'react';
import Home from './Home';
import TITLE from '../../constants/pageTitle';
import { DESCRIPTION } from '../../constants/metaHtml';
import Root from '../../components/LayoutRep/Root';

async function action() {
  const title = TITLE.HOME;
  const description = DESCRIPTION.HOME;

  return {
    title,
    description,
    chunks: ['home'],
    component: (
      <Root>
        <Home title={title} />
      </Root>
    ),
  };
}

export default action;
