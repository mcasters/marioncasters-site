import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './ContentForm.css';

function ContentForm({ keyContent, isTextArea, initialContent, mutation }) {
  const [isChanged, setIsChanged] = useState(false);
  const [text, setText] = useState(initialContent);

  const handleChange = e => {
    e.preventDefault();
    setIsChanged(true);
    setText(e.target.value);
  };

  return (
    <>
      <form
        className="formGroup"
        onSubmit={e => {
          e.preventDefault();
          mutation({
            variables: {
              input: {
                key: keyContent,
                text,
              },
            },
          });
        }}
      >
        {!isTextArea && (
          <input
            placeholder={keyContent}
            name="text"
            type="text"
            value={text}
            onChange={handleChange}
          />
        )}
        {isTextArea && (
          <textarea
            placeholder={keyContent}
            name="textarea"
            value={text}
            onChange={handleChange}
          />
        )}
        {isChanged && <button type="submit">OK</button>}
      </form>
    </>
  );
}

ContentForm.propTypes = {
  keyContent: PropTypes.string.isRequired,
  isTextArea: PropTypes.bool.isRequired,
  initialContent: PropTypes.string.isRequired,
  mutation: PropTypes.func.isRequired,
};

export default withStyles(s)(ContentForm);
