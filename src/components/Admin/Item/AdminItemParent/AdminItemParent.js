import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'react-apollo';

import ItemList from '../ItemList';
import ItemAddForm from '../ItemAdd';
import ADD_ITEM_MUTATION from '../../../../data/graphql/queries/addItemMutation.graphql';
import GET_ITEMS_QUERY from '../../../../data/graphql/queries/getAllItems.graphql';
import DELETE_ITEM from '../../../../data/graphql/queries/deleteItem.graphql';
import UPDATE_MUTATION from '../../../../data/graphql/queries/updateItemMutation.graphql';

export default function AdminItemParent({ type }) {
  const [addItem, { loading, error }] = useMutation(ADD_ITEM_MUTATION, {
    update(cache, { data }) {
      const { getAllItems } = cache.readQuery({
        query: GET_ITEMS_QUERY,
        variables: {
          type,
        },
      });
      cache.writeQuery({
        query: GET_ITEMS_QUERY,
        variables: {
          type,
        },
        data: { getAllItems: [...getAllItems, data.addItem] },
      });
    },
  });

  const [deleteItem] = useMutation(DELETE_ITEM, {
    update(cache, { data }) {
      const { getAllItems } = cache.readQuery({
        query: GET_ITEMS_QUERY,
        variables: {
          type,
        },
      });
      const indexToDelete = getAllItems.findIndex(item => {
        return item.id === data.deleteItem;
      });
      getAllItems.splice(indexToDelete, 1);
      cache.writeQuery({
        query: GET_ITEMS_QUERY,
        variables: {
          type,
        },
        data: { getAllItems },
      });
    },
  });

  const [updateItem] = useMutation(UPDATE_MUTATION, {
    update(cache, { data }) {
      const { getAllItems } = cache.readQuery({
        query: GET_ITEMS_QUERY,
        variables: {
          type,
        },
      });
      const indexToChange = getAllItems.findIndex(item => {
        return item.id === data.updateItem;
      });
      getAllItems.splice(indexToChange, 1, data.updateItem);
      cache.writeQuery({
        query: GET_ITEMS_QUERY,
        variables: {
          type,
        },
        data: { getAllItems },
      });
    },
  });

  if (loading) return <p>OK</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <>
      <ItemAddForm type={type} addMutation={addItem} />
      <ItemList
        type={type}
        deleteMutation={deleteItem}
        updateMutation={updateItem}
      />
    </>
  );
}

AdminItemParent.propTypes = {
  type: PropTypes.string.isRequired,
};
