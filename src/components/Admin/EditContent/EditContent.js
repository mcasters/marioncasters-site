import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Mutation } from 'react-apollo/index';

import ADD_CONTENT_MUTATION from '../../../data/graphql/mutations/addContentMutation.graphql';
import Alert from '../../Alert';
import s from './EditContent.css';

class EditContent extends React.Component {
  static propTypes = {
    keyContent: PropTypes.string.isRequired,
    isTextArea: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.constructContent = this.constructContent.bind(this);
    this.complete = this.complete.bind(this);
  }

  getInitialState = () => ({
    text: '',
    isComplete: false,
  });

  constructContent = () => {
    return {
      key: this.props.keyContent,
      text: this.state.text,
    };
  };

  complete = () => {
    this.setState(this.getInitialState());
    this.setState({ isComplete: true });
  };

  handleInputChange(e) {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }

  render() {
    const { isComplete } = this.state;
    const { keyContent, isTextArea } = this.props;

    return (
      <Mutation mutation={ADD_CONTENT_MUTATION} ssr>
        {(mutation, { error }) => {
          return isTextArea ? (
            <Fragment>
              <form
                className="formGroup"
                onSubmit={e => {
                  e.preventDefault();
                  const input = this.constructContent();
                  mutation({ variables: { input } }).then(res => {
                    if (res.data.addContent) this.complete();
                  });
                }}
              >
                <textarea
                  placeholder={keyContent}
                  name="textarea"
                  value={this.state.text}
                  onChange={this.handleInputChange}
                />
                <button type="submit">OK</button>
              </form>

              {error && <Alert message={`${error}`} isError />}
              {isComplete && <Alert message="Enregistré" isError={false} />}
            </Fragment>
          ) : (
            <Fragment>
              <form
                className="formGroup"
                onSubmit={e => {
                  e.preventDefault();
                  const input = this.constructContent();
                  mutation({ variables: { input } }).then(res => {
                    if (res.data.addContent) this.complete();
                  });
                }}
              >
                <input
                  placeholder={keyContent}
                  name="text"
                  type="text"
                  value={this.state.text}
                  onChange={this.handleInputChange}
                />
                <button type="submit">OK</button>
              </form>
              {error && <Alert message={`${error}`} isError />}
              {isComplete && <Alert message="Enregistré" isError={false} />}
            </Fragment>
          );
        }}
      </Mutation>
    );
  }
}

export default withStyles(s)(EditContent);
