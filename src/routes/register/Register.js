import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Mutation } from 'react-apollo';

import history from '../../history';
import s from './Register.css';
import SIGN_UP_MUTATION from './signupMutation.graphql';

class Register extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  static contextTypes = {
    fetch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };
  }

  render() {
    const { username, password, email } = this.state;

    return (
      <Mutation
        mutation={SIGN_UP_MUTATION}
        onError={() => history.push('/')}
        update={(cache, mutationResult) => {
          const isConnected = mutationResult.data.signup || false;
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
          data.signup ? history.push('/admin') : history.push('/home')
        }
      >
        {(signup, { error }) => (
          <div className={s.root}>
            <div className={s.container}>
              <h1>{this.props.title}</h1>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  const input = {
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email,
                  };
                  signup({ variables: { input } });
                }}
              >
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={e => this.setState({ username: e.target.value })}
                  placeholder="Utilisateur"
                  autoComplete="username"
                />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={e => this.setState({ password: e.target.value })}
                  placeholder="Mot de passe"
                  autoComplete="current-password"
                />
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={e => this.setState({ email: e.target.value })}
                    placeholder="Email"
                    autoComplete="email"
                  />
                </div>
                <button type="submit">Créer le compte</button>
              </form>
              {error && <p>Error :( Please try again</p>}
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default withStyles(s)(Register);
