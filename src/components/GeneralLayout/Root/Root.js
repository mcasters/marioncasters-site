import React from 'react';
import PropTypes from 'prop-types';

import Alert from '../../Alert';
import AlertContext from '../../AlertContext/Alert';
import Layout from '../Layout';

class Root extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);

    this.triggerAlert = (message, isError) => {
      this.setState({
        message,
        isError,
      });
    };

    this.state = {
      message: '',
      isError: false,
      // eslint-disable-next-line react/no-unused-state
      triggerAlert: this.triggerAlert,
    };
  }

  render() {
    const { children } = this.props;
    const { message, isError } = this.state;

    return (
      <AlertContext.Provider value={this.state}>
        <Layout>{children}</Layout>
        {message !== '' && <Alert message={message} isError={isError} />}
      </AlertContext.Provider>
    );
  }
}

export default Root;
