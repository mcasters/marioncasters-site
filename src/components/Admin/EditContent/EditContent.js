import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Query } from 'react-apollo/index';

import Alert from '../../Alert';
import s from './EditContent.css';
import GET_CONTENT from '../../../data/graphql/queries/getContent.graphql';
import MutateContent from './MutateContent';

class Edit extends React.Component {
  static propTypes = {
    keyContent: PropTypes.string.isRequired,
    isTextArea: PropTypes.bool.isRequired,
  };

  render() {
    const { keyContent, isTextArea } = this.props;

    return (
      <Query
        query={GET_CONTENT}
        variables={{ keyContent }}
        onError={e => <Alert message={e} isError />}
        ssr
      >
        {({ loading, data }) => {
          if (loading) return <p>Chargement...</p>;

          if (data.getContent) {
            const result = [];
            result.push(data.getContent);

            return result.map(({ id, text }) => {
              return (
                <MutateContent
                  key={id}
                  keyContent={keyContent}
                  isTextArea={isTextArea}
                  initialContent={text}
                />
              );
            });
          }
          return null;
        }}
      </Query>
    );
  }
}

export default withStyles(s)(Edit);
