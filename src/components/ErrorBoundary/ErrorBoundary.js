import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AlertContext from '../AlertContext';

function ErrorBoundary({ children }) {
  const triggerAlert = useContext(AlertContext);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  React.componentDidCatch = (err, errInfo) => {
    setError(err);
    setErrorInfo(errInfo);
  };

  if (error) {
    const message = `${error.toString()} : ${errorInfo}`;
    return triggerAlert(message, true);
  }
  return children;
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
