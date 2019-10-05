import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from 'react-apollo';

import ADD_CONTENT_MUTATION from '../../../data/graphql/queries/addContentMutation.graphql';
import s from './ContentForm.css';
import AlertContext from '../../AlertContext';

class ContentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChanged: false,
      text: this.props.initialContent,
    };

    this.handleChange = this.handleChange.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  getResult = (message, isError) => {
    this.context.triggerAlert(message, isError);
    this.setState(this.getInitialState);
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ isChanged: true, text: e.target.value });
  };

  render() {
    const { keyContent, isTextArea } = this.props;

    return (
      <>
        <form className="formGroup">
          {!isTextArea && (
            <input
              placeholder={keyContent}
              name="text"
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          )}
          {isTextArea && (
            <textarea
              placeholder={keyContent}
              name="textarea"
              value={this.state.text}
              onChange={this.handleChange}
            />
          )}
          {this.state.isChanged && (
            <ContentMutation
              keyContent={keyContent}
              text={this.state.text}
              onResult={this.getResult}
            />
          )}
        </form>
      </>
    );
  }
}

ContentForm.propTypes = {
  keyContent: PropTypes.string.isRequired,
  isTextArea: PropTypes.bool.isRequired,
  initialContent: PropTypes.string.isRequired,
};

ContentForm.contextType = AlertContext;

function ContentMutation({ keyContent, text, onResult }) {
  const [addContent] = useMutation(ADD_CONTENT_MUTATION, {
    variables: {
      input: {
        key: keyContent,
        text,
      },
    },
    onError(error) {
      onResult(error.message, true);
    },
    onCompleted() {
      onResult('Enregistré', false);
    },
  });

  return (
    <button onClick={addContent} type="button">
      OK
    </button>
  );
}

ContentMutation.propTypes = {
  keyContent: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onResult: PropTypes.func.isRequired,
};

export default withStyles(s)(ContentForm);
