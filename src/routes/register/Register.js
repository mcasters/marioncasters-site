import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from '@apollo/react-hooks';

import history from '../../history';
import s from './Register.css';
import SIGN_UP_MUTATION from './signupMutation.graphql';

function Register({ title }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [signup] = useMutation(SIGN_UP_MUTATION, {
    update(cache, mutationResult) {
      const isConnected = mutationResult.data.signup || false;
      cache.writeData({
        data: {
          adminStatus: {
            __typename: 'AdminStatus',
            isConnected,
          },
        },
      });
    },
    onError() {
      history.push('/home');
    },
    onCompleted(data) {
      return data.signup ? history.push('/admin') : history.push('/home');
    },
  });

  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            const input = {
              username,
              password,
              email,
            };
            signup({ variables: { input } });
          }}
        >
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Utilisateur"
            autoComplete="username"
          />
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Mot de passe"
            autoComplete="current-password"
          />
          <div>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="email"
            />
          </div>
          <button type="submit">Créer le compte</button>
        </form>
      </div>
    </div>
  );
}

Register.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(Register);
