import React from 'react';

import Root from '../../components/LayoutRep/Root';
import AdminPage from './AdminPage';
import TITLE from '../../constants/pageTitle';
import { DESCRIPTION } from '../../constants/metaHtml';

function action() {
  const title = TITLE.ADMINISTRATION;
  const description = DESCRIPTION.ADMIN;

  return {
    title,
    description,
    chunks: ['admin'],
    component: (
      <Root>
        <AdminPage title={title} />
      </Root>
    ),
  };
}

export default action;
