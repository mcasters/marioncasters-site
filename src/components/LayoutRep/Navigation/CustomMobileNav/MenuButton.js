import React from 'react';
import PropTypes from 'prop-types';

// import s from './Menu.css';

function MenuButton({ open, onClick }) {
  const handleClick = () => {
    onClick();
  };

  const styles = {
    container: {
      position: 'fixed',
      top: '10px',
      height: '32px',
      width: '32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '4px',
      zIndex: '3',
    },
    line: {
      height: '2px',
      width: '20px',
      background: '#ab8b8b',
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: open ? 'rotate(45deg)' : 'none',
      transformOrigin: 'top left',
      marginBottom: '5px',
    },
    lineMiddle: {
      opacity: open ? 0 : 1,
      transform: open ? 'translateX(-16px)' : 'none',
    },
    lineBottom: {
      transform: open ? 'translateX(-1px) rotate(-45deg)' : 'none',
      transformOrigin: 'top left',
      marginTop: '5px',
    },
  };

  return (
    <div
      style={styles.container}
      onClick={handleClick}
      onKeyPress={handleClick}
      tabIndex={0}
      role="button"
    >
      <div style={{ ...styles.line, ...styles.lineTop }} />
      <div style={{ ...styles.line, ...styles.lineMiddle }} />
      <div style={{ ...styles.line, ...styles.lineBottom }} />
    </div>
  );
}

MenuButton.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;