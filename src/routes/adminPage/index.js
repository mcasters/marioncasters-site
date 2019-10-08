import React from 'react';

import Root from '../../components/LayoutRep/Root';
import AdminPage from './AdminPage';
import ROUTER_CONSTANTS from '../../constants/routerConstants';
import META_CONSTANTS from '../../constants/metaHtmlConstants';

function action() {
  const title = ROUTER_CONSTANTS.TITLE.ADMINISTRATION;
  const description = META_CONSTANTS.META_DESCRIPTION.ADMIN;

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
