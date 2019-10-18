import React from 'react';
import TITLE from '../../constants/pageTitle';
import { DESCRIPTION } from '../../constants/metaHtml';
import ContactPage from './ContactPage';
import Root from '../../components/LayoutRep/Root';

function action() {
  const title = TITLE.CONTACT;
  const description = DESCRIPTION.CONTACT;

  return {
    title,
    description,
    chunks: ['contact'],
    component: (
      <Root>
        <ContactPage title={title} />
      </Root>
    ),
  };
}

export default action;
