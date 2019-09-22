import React from 'react';
import PropTypes from 'prop-types';

import Alert from '../../Alert';
import AlertContext from '../../AlertContext/AlertContext';
import Layout from '../Layout';

class Root extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    this.triggerAlert = this.triggerAlert.bind(this);
    this.clearAlert = this.clearAlert.bind(this);
  }

  getInitialState = () => ({
    alert: {
      message: '',
      isError: false,
      triggerAlert: this.triggerAlert,
    },
  });

  triggerAlert = (message, isError) => {
    this.setState({
      alert: { message, isError },
    });
  };

  clearAlert = () => {
    this.setState(this.getInitialState);
  };

  render() {
    const { children } = this.props;
    const alert = this.state.alert.message !== '' ? this.state.alert : null;

    return (
      <AlertContext.Provider value={this.state.alert}>
        <Layout>{children}</Layout>
        {alert !== null && (
          <Alert
            message={alert.message}
            isError={alert.isError}
            clearAlert={this.clearAlert}
          />
        )}
      </AlertContext.Provider>
    );
  }
}

export default Root;
