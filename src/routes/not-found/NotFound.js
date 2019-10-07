import React from 'react';
import PropTypes from 'prop-types';
import GLOBAL_CONSTANTS from '../../constants/globalConstants';

function NotFound({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{GLOBAL_CONSTANTS.NOT_FOUND}</p>
    </div>
  );
}

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NotFound;
