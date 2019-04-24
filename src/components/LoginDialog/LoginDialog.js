import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Mutation } from 'react-apollo';
import Modal from 'react-modal';

import s from './LoginDialog.css';
import history from '../../history';
import LOGIN_MUTATION from './loginMutation.graphql';

const customStyles = {
  overlay: {
    backgroundColor: 'none',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app');

class LoginDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showModal: true,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal(e) {
    e.preventDefault();
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        onError={() => {
          history.push('/home');
        }}
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
      >
        {(login, { error }) => (
          <Modal
            id="auth"
            contentLabel="authentification"
            closeTimeoutMS={150}
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            style={customStyles}
          >
            <h1>Authentification</h1>
            <form
              onSubmit={e => {
                this.handleCloseModal(e);
                const input = {
                  username: this.state.username,
                  password: this.state.password,
                };
                login({ variables: { input } }).then(res =>
                  res.data.login
                    ? history.push('/admin')
                    : history.push('/home'),
                );
              }}
            >
              <input
                id="username"
                type="text"
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}
                placeholder="Utilisateur"
                autoComplete="username"
              />
              <input
                id="password"
                type="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                placeholder="Mot de passe"
                autoComplete="current-password"
              />
              <button className={s.loginDialogButton} type="submit">
                Login
              </button>
              <button
                type="button"
                className={s.loginDialogButton}
                onClick={e => this.handleCloseModal(e)}
              >
                Annuler
              </button>
            </form>
            {error && <p>Error :( Please try again</p>}
          </Modal>
        )}
      </Mutation>
    );
  }
}

export default withStyles(s)(LoginDialog);