import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Mutation } from 'react-apollo';

import history from '../../history';
import s from './Login.css';
import LOGIN_MUTATION from './loginMutation.graphql';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    const { username, password } = this.state;

    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        onError={() => history.push('/')}
        update={(cache, mutationResult) => {
          const isConnected = mutationResult.data.login || false;
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
          data.login ? history.push('admin') : history.push('/')
        }
      >
        {login => (
          <div className={s.root}>
            <div className={s.container}>
              <h1>{this.props.title}</h1>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  const input = this.state;
                  login({ variables: { input } });
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
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default withStyles(s)(Login);
