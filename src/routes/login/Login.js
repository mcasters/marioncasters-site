import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import history from '../../history';
import s from './Login.css';

const query = `mutation Login($input: LoginInput!) {
  login(input: $input)
  }`;

class Login extends React.Component {
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
    };
  }

  login = async e => {
    e.preventDefault();
    const input = this.state;
    await this.context
      .fetch('/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query,
          variables: { input },
        }),
      })
      .then(res => res.json())
      .then(data => (data ? history.push('admin') : history.push('/')))
      // eslint-disable-next-line no-console
      .catch(error => console.log('ERROR', error.message));
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <form onSubmit={this.login}>
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
    );
  }
}

export default withStyles(s)(Login);
