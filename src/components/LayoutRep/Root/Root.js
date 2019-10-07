import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Alert from '../../Alert';
import AlertContext from '../../AlertContext';
import Layout from '../Layout';

function Root({ children }) {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const triggerAlert = (m, e) => {
    setMessage(m);
    setIsError(e);
  };

  const clearAlert = () => {
    setMessage('');
  };

  return (
    <AlertContext.Provider value={triggerAlert}>
      <Layout>{children}</Layout>
      {message !== '' && (
        <Alert message={message} isError={isError} clearAlert={clearAlert} />
      )}
    </AlertContext.Provider>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
