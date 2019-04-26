import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import GET_CONTENT from '../../data/graphql/queries/getContent.graphql';

class Content extends React.Component {
  static propTypes = {
    keyContent: PropTypes.string.isRequired,
  };

  render() {
    const { keyContent } = this.props;
    return (
      <Query query={GET_CONTENT} variables={{ keyContent }} ssr>
        {({ loading, data }) => {
          if (loading) return <div>Chargement...</div>;

          return (
            <Fragment>
              {data.getContent && <p>{data.getContent.text}</p>}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default Content;
