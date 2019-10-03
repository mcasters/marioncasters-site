import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Mutation, Query } from 'react-apollo';

import ADD_CONTENT_MUTATION from '../../../data/graphql/queries/addContentMutation.graphql';
import s from './EditContent.css';
import GET_CONTENT from '../../../data/graphql/queries/getContent.graphql';
import AlertContext from '../../AlertContext';

class Edit extends React.Component {
  render() {
    const { keyContent, isTextArea } = this.props;

    return (
      <Query query={GET_CONTENT} variables={keyContent} ssr>
        {({ loading, error, data }) => {
          if (loading) return <p>Chargement...</p>;
          if (error) return <p>Error :(</p>;

          if (data.getContent) {
            const result = [];
            result.push(data.getContent);

            return result.map(({ id, text }) => {
              let inputOnChange;

              return (
                <Mutation
                  mutation={ADD_CONTENT_MUTATION}
                  key={id}
                  onError={err => this.context.triggerAlert(err.message, true)}
                  onCompleted={() =>
                    this.context.triggerAlert('Enregistré', false)
                  }
                  ssr
                >
                  {mutation => {
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
                                  text: inputOnChange.value,
                                },
                              },
                            });
                          }}
                        >
                          {!isTextArea && (
                            <input
                              ref={node => {
                                inputOnChange = node;
                              }}
                              placeholder={keyContent}
                              name="text"
                              type="text"
                              value={text}
                            />
                          )}
                          {isTextArea && (
                            <textarea
                              ref={node => {
                                inputOnChange = node;
                              }}
                              placeholder={keyContent}
                              name="textarea"
                              value={text}
                              onChange={this.handleChange}
                            />
                          )}
                          <button type="submit">OK</button>
                        </form>
                      </>
                    );
                  }}
                </Mutation>
              );
            });
          }
          return null;
        }}
      </Query>
    );
  }
}

Edit.propTypes = {
  keyContent: PropTypes.string.isRequired,
  isTextArea: PropTypes.bool.isRequired,
};

Edit.contextType = AlertContext;

export default withStyles(s)(Edit);
