/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Mutation, withApollo } from 'react-apollo';
import PropTypes from 'prop-types';

import history from '../../history';
import LOGOUT_MUTATION from './logoutMutation.graphql';

class Logout extends React.Component {
  static propTypes = {
    client: PropTypes.object.isRequired,
  };

  render() {
    const { client } = this.props;
    return (
      <Mutation mutation={LOGOUT_MUTATION}>
        {logout => (
          <button
            onClick={e => {
              e.preventDefault();
              logout().then(res => {
                if (res.data.logout) {
                  client.resetStore().then(() => history.push('/home'));
                }
              });
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
