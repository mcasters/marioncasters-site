import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Mutation, Query } from 'react-apollo';

import s from './LoginControl.css';
import GET_ADMIN_STATUS_QUERY from './getAdminStatusQuery.graphql';
import LOGOUT_MUTATION from './logoutMutation.graphql';
import history from '../../history';

class LoginControl extends React.Component {
  render() {
    return (
      <Query query={GET_ADMIN_STATUS_QUERY}>
        {({ data: { adminStatus } }) =>
          adminStatus.isConnected ? <LogoutButton /> : <LoginButton />
        }
      </Query>
    );
  }
}

const LoginButton = () => (
  <button
    className={s.loginLink}
    onClick={e => {
      e.preventDefault();
      return history.push('login');
    }}
  >
    Admin In
  </button>
);

const LogoutButton = () => (
  <Mutation
    mutation={LOGOUT_MUTATION}
    update={(cache, mutationResult) => {
      const isConnected = !mutationResult.data.logout;
      cache.writeData({
        data: {
          adminStatus: {
            __typename: 'AdminStatus',
            isConnected,
          },
        },
      });
    }}
    onCompleted={data =>
      data.logout ? history.push('/') : history.push('admin')
    }
  >
    {logout => (
      <button
        className={s.loginLink}
        onClick={e => {
          e.preventDefault();
          logout();
        }}
      >
        Admin Out
      </button>
    )}
  </Mutation>
);

export default withStyles(s)(LoginControl);
