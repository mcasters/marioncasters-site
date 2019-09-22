import React from 'react';
import NotFound from './NotFound';
import Root from '../../components/GeneralLayout/Root';

const title = 'Page Not Found';

function action() {
  return {
    chunks: ['not-found'],
    title,
    component: (
      <Root>
        <NotFound title={title} />
      </Root>
    ),
    status: 404,
  };
}

export default action;
