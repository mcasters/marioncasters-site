/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import GET_ITEMS_QUERY from '../../../../data/graphql/queries/getAllItems.graphql';
import ItemList from '../ItemList';
import ItemAdd from '../ItemAdd';

class AdminItemParent extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    allImages: PropTypes.object.isRequired,
  };

  render() {
    const { type, allImages } = this.props;

    return (
      <Query query={GET_ITEMS_QUERY} variables={{ type }} ssr>
        {({ error, data }) => {
          if (error) return <p>ERROR</p>;
          return (
            <Fragment>
              <ItemAdd type={type} />
              {data.getAllItems !== undefined && (
                <ItemList
                  items={data.getAllItems}
                  type={type}
                  allImages={allImages}
                />
              )}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default AdminItemParent;
