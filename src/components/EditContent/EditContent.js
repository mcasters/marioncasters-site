/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Mutation } from 'react-apollo/index';

import ADD_CONTENT_MUTATION from './addContentMutation.graphql';
import Alert from '../../components/Alert';
import s from './EditContent.css';

class EditContent extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
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
    const input = {
      label: this.props.label,
      text: this.state.text,
    };

    return input;
  };

  handleInputChange(e) {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }

  complete = () => {
    this.setState(this.getInitialState());
    this.setState({ isComplete: true });
  };

  render() {
    const title = this.props.label;
    const isComplete = this.state.isComplete;

    return (
      <Mutation mutation={ADD_CONTENT_MUTATION} ssr>
        {(mutation, { error }) => (
          <div>
            <h2>{title}</h2>
            <form
              className="formGroup"
              onSubmit={e => {
                e.preventDefault();
                const input = this.constructContent();
                mutation({ variables: { input } }).then(res => {
                  if (res) this.complete();
                });
              }}
            >
              <textarea
                placeholder="Texte"
                name="text"
                type="textarea"
                value={this.state.text}
                onChange={this.handleInputChange}
              />
              <button type="submit">OK</button>
            </form>

            {error && <Alert message="Erreur GraphQl" isError />}
            {isComplete && <Alert message="Enregistré" isError={false} />}
          </div>
        )}
      </Mutation>
    );
  }
}

export default withStyles(s)(EditContent);
