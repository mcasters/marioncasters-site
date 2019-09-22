import React from 'react';

import Page from '../../components/GeneralLayout/Page';
import META_HTML_CONSTANTS from '../../constants/metaHtmlConstants';
import privacy from './privacy.md';
import Root from '../../components/GeneralLayout/Root';

function action() {
  const { title } = privacy;
  const description = META_HTML_CONSTANTS.META_DESCRIPTION.PRIVACY;

  return {
    title,
    description,
    chunks: ['privacy'],
    component: (
      <Root>
        <Page {...privacy} showTitle />
      </Root>
    ),
  };
}

export default action;
