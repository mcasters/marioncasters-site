import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import GET_CONTENT from '../../data/graphql/queries/getContent.graphql';
import s from './Content.css';

class Content extends React.Component {
  render() {
    const { keyContent } = this.props;
    return (
      <Query query={GET_CONTENT} variables={{ keyContent }} ssr>
        {({ loading, data }) => {
          if (loading) return <p>Chargement...</p>;

          return (
            <>
              {data.getContent && (
                <p className={s.content}>{data.getContent.text}</p>
              )}
            </>
          );
        }}
      </Query>
    );
  }
}

Content.propTypes = {
  keyContent: PropTypes.string.isRequired,
};

export default withStyles(s)(Content);
