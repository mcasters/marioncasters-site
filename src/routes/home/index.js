import React from 'react';
import Home from './Home';
import CONTENT_CONSTANTS from '../../constants/contentConstants';
import META_HTML_CONSTANTS from '../../constants/metaHtmlConstants';
import Root from '../../components/LayoutRep/Root';

async function action() {
  const title = CONTENT_CONSTANTS.TITLE.HOME;
  const description = META_HTML_CONSTANTS.META_DESCRIPTION.HOME;

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
