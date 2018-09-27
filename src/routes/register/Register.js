import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import history from '../../history';
import s from './Register.css';

const query = `mutation Signup($input: SignupInput!) {
  signup(input: $input)
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
      email: '',
    };
  }

  signup = async e => {
    e.preventDefault();
    const input = this.state;
    await this.context
      .fetch('/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query,
          variables: { input },
        }),
        redirect: 'follow',
      })
      .then(res => res.json())
      .then(data => (data ? history.push('admin') : history.push('/')))
      // eslint-disable-next-line no-console
      .catch(error => console.log('ERROR', error.message));
  };

  render() {
    const { username, password, email } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <form>
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

            <button onClick={this.state.login ? this.login : this.signup}>
              Créer le compte
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);
