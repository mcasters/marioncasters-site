import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import s from './LoginControl.css';
import Link from '../Link';
import LoginDialog from '../LoginDialog';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openLogin: false,
    };

    this.openLogin = this.openLogin.bind(this);
  }

  componentWillUnmount = () => {
    this.setState({ openLogin: false });
  };

  openLogin = e => {
    e.preventDefault();
    this.setState({ openLogin: true });
  };

  closeLogin = () => {
    this.setState({ openLogin: false });
  };

  render() {
    return this.props.isConnected ? (
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
            this.openLogin(e);
          }}
        >
          Admin in
        </button>
        {this.state.openLogin && <LoginDialog onClose={this.closeLogin} />}
      </>
    );
  }
}

LoginControl.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

export default withStyles(s)(LoginControl);
