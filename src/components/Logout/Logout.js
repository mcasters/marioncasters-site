/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import history from '../../history';
import LOGOUT_MUTATION from './logoutMutation.graphql';

function Logout() {
  const [logout, { client }] = useMutation(LOGOUT_MUTATION);

  return (
    <button
      type="button"
      onClick={e => {
        e.preventDefault();
        logout()
          .then(() => client.resetStore())
          .then(() => history.push('/home'));
      }}
    >
      Logout
    </button>
  );
}

export default Logout;
