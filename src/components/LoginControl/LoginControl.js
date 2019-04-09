import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Query } from 'react-apollo';

import s from './LoginControl.css';
import Link from '../Link';
import LoginDialog from '../LoginDialog';
import GET_ADMIN_STATUS_QUERY from './getAdminStatusQuery.graphql';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
    };

    this.openLogin = this.openLogin.bind(this);
  }

  componentWillUnmount = () => {
    this.setState({ login: false });
  };

  openLogin = e => {
    e.preventDefault();
    this.setState({ login: true });
  };

  render() {
    return (
      <Query query={GET_ADMIN_STATUS_QUERY}>
        {({ error, data: { adminStatus } }) => {
          if (error) return `Error! ${error.message}`;

          return adminStatus !== undefined && adminStatus.isConnected ? (
            <Link className={s.link} to="/admin">
              Admin
            </Link>
          ) : (
            <Fragment>
              <button
                className={s.loginLink}
                onClick={e => {
                  this.openLogin(e);
                }}
              >
                Admin in
              </button>
              {this.state.login && <LoginDialog />}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(s)(LoginControl);
