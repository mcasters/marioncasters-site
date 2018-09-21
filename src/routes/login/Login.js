import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  state = {
    username: '',
    password: '',
    email: '',
    login: true,
  };

  submit = async () => {};

  render() {
    const { username, password, email, login } = this.state;

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
            {!this.state.login && (
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={e => this.setState({ email: e.target.value })}
                  placeholder="Email"
                  autoComplete="email"
                />
              </div>
            )}
            <button onClick={this.submit()}>
              {login ? 'Login' : 'Créer le compte'}
            </button>
            <button
              className={s.link}
              onClick={() => this.setState({ login: !login })}
            >
              {login ? 'Créer un compte' : 'Déjà un compte'}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);
