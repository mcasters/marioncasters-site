import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import s from './LoginDialog.css';

const customStyles = {
  overlay: {
    backgroundColor: 'none',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app');

function LoginDialog({ onClose, loginMutation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = e => {
    e.preventDefault();
    setShowModal(false);
    onClose();
  };

  return (
    <Modal
      id="auth"
      contentLabel="authentification"
      closeTimeoutMS={150}
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <h1 className={s.loginTitle}>Authentification</h1>
      <form
        onSubmit={e => {
          const input = {
            username,
            password,
          };
          loginMutation({ variables: { input } });
          handleCloseModal(e);
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
        <button className={s.loginDialogButton} type="submit">
          Login
        </button>
        <button
          type="button"
          className={s.loginDialogButton}
          onClick={e => handleCloseModal(e)}
        >
          Annuler
        </button>
      </form>
    </Modal>
  );
}

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  loginMutation: PropTypes.func.isRequired,
};

export default withStyles(s)(LoginDialog);
