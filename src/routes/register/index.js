import React from 'react';
import Register from './Register';
import Root from '../../components/LayoutRep/Root';

const title = 'New User Registration';

function action() {
  return {
    chunks: ['register'],
    title,
    component: (
      <Root>
        <Register title={title} />
      </Root>
    ),
  };
}

export default action;
