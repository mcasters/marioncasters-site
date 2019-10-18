import React from 'react';

import Page from '../../components/LayoutRep/Page';
import { DESCRIPTION } from '../../constants/metaHtml';
import privacy from './privacy.md';
import Root from '../../components/LayoutRep/Root';

function action() {
  const { title } = privacy;
  const description = DESCRIPTION.PRIVACY;

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
