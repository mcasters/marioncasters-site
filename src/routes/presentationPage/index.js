import React from 'react';

import CONTENT_CONSTANTS from '../../constants/contentConstants';
import META_HTML_CONSTANTS from '../../constants/metaHtmlConstants';
import PresentationPage from './PresentationPage';
import Root from '../../components/GeneralLayout/Root';

function action() {
  const title = CONTENT_CONSTANTS.TITLE.PRESENTATION;
  const description = META_HTML_CONSTANTS.META_DESCRIPTION.PRESENTATION;

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
