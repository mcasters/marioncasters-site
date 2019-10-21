import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';

import s from './LoginControl.css';
import Link from '../Link';
import LoginDialog from '../LoginDialog';
import LOGIN_MUTATION from '../../data/graphql/queries/loginMutation.graphql';
import history from '../../history';

function LoginControl({ isConnected }) {
  useStyles(s);
  const [login] = useMutation(LOGIN_MUTATION, {
    update(cache, mutationResult) {
      const data = {
        adminStatus: {
          __typename: 'AdminStatus',
          isConnected: mutationResult.data.login || false,
        },
      };
      cache.writeData({ data });
    },
    onError() {
      history.push('/home');
    },
    onCompleted(data) {
      return data.login ? history.push('/admin') : history.push('/home');
    },
  });

  const [openLogin, setOpenDialog] = React.useState(false);

  React.componentWillUnmount = () => {
    setOpenDialog(false);
  };

  const closeLogin = () => {
    setOpenDialog(false);
  };

  return isConnected ? (
    <Link className={s.link} to="/admin">
      Admin
    </Link>
  ) : (
    <>
      <button
        type="button"
        className={s.loginLink}
        onClick={e => {
          e.preventDefault();
          setOpenDialog(true);
        }}
      >
        Admin in
      </button>
      {openLogin && <LoginDialog onClose={closeLogin} loginMutation={login} />}
    </>
  );
}

LoginControl.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

export default LoginControl;
