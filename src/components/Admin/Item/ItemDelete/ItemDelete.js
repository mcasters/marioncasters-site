/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo/index';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa/index';

import DELETE_ITEM from '../../../../data/graphql/queries/deleteItem.graphql';
import Alert from '../../../Alert';
import GET_ITEMS_QUERY from '../../../../data/graphql/queries/getAllItems.graphql';

class ItemDelete extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  render() {
    const { id, type } = this.props;

    return (
      <Mutation
        mutation={DELETE_ITEM}
        update={(cache, { data: { deleteItem } }) => {
          const { getAllItems } = cache.readQuery({
            query: GET_ITEMS_QUERY,
            variables: {
              type,
            },
          });
          const indexToDelete = getAllItems.findIndex(e => {
            return e.id === deleteItem;
          });
          getAllItems.splice(indexToDelete, 1);
          cache.writeQuery({
            query: GET_ITEMS_QUERY,
            variables: {
              type,
            },
            data: { getAllItems },
          });
        }}
        ssr
      >
        {(mutation, { error, data }) => (
          <Fragment>
            <form
              onSubmit={e => {
                e.preventDefault();
                mutation({ variables: { id, type } });
              }}
            >
              <button type="submit">
                <FaTrash />
              </button>
            </form>
            {error && <Alert message={error.message} isError />}
            {data && data.deleteItem && (
              <Alert message="Item supprimé" isError={false} />
            )}
          </Fragment>
        )}
      </Mutation>
    );
  }
}

export default ItemDelete;
