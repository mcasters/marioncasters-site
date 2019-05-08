/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Mutation, withApollo } from 'react-apollo';

import history from '../../history';
import LOGOUT_MUTATION from './logoutMutation.graphql';

class Logout extends React.Component {
  render() {
    return (
      <Mutation
        mutation={LOGOUT_MUTATION}
        update={cache => {
          cache.reset().then(() => history.push('/home'));
        }}
      >
        {logout => (
          <button
            type="button"
            onClick={e => {
              e.preventDefault();
              logout();
            }}
          >
            Logout
          </button>
        )}
      </Mutation>
    );
  }
}

export default withApollo(Logout);
