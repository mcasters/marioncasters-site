import React from 'react';
import PropTypes from 'prop-types';

import Alert from '../Alert';

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      const message = `${this.state.error.toString()} : ${
        this.state.errorInfo
      }`;
      return <Alert message={message} isError />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
