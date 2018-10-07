import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { graphql, compose, Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import s from './LoginControl.css';
import GET_ADMIN_STATUS_QUERY from './getAdminStatusQuery.graphql';
import LOGOUT_MUTATION from './logoutMutation.graphql';
import history from '../../history';

class LoginControl extends React.Component {
  static propTypes = {
    data: PropTypes.shape.isRequired,
  };

  render() {
    const {
      data: {
        adminStatus: { isConnected },
      },
    } = this.props;

    return isConnected ? <LogoutButton /> : <LoginButton />;
  }
}

function LoginButton() {
  return (
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
}

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

export default compose(
  withStyles(s),
  graphql(GET_ADMIN_STATUS_QUERY),
)(LoginControl);
