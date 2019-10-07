import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function Link(props) {
  const handleClick = event => {
    if (props.onClick) {
      props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    if (props.target !== '_blank') {
      event.preventDefault();
      history.push(props.to);
    }
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a href={props.to} {...props} onClick={handleClick}>
      {props.children}
    </a>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  target: PropTypes.string,
};

Link.defaultProps = {
  onClick: null,
  target: null,
};

export default Link;
