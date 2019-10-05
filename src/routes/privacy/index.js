import React from 'react';

import Page from '../../components/LayoutRep/Page';
import META_HTML_CONSTANTS from '../../constants/metaHtmlConstants';
import privacy from './privacy.md';
import Root from '../../components/LayoutRep/Root';

function action() {
  const { title } = privacy;
  const description = META_HTML_CONSTANTS.META_DESCRIPTION.PRIVACY;

  return {
    title,
    description,
    chunks: ['privacy'],
    component: (
      <Root>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Page {...privacy} showTitle />
      </Root>
    ),
  };
}

export default action;
