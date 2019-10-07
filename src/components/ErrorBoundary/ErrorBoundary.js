import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Alert from '../Alert';

function ErrorBoundary({ children }) {
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  React.componentDidCatch = (err, errInfo) => {
    setError(err);
    setErrorInfo(errInfo);
  };

  if (error) {
    const message = `${error.toString()} : ${errorInfo}`;
    return <Alert message={message} isError />;
  }
  return children;
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
