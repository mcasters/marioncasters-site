import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'react-apollo';

import ItemList from '../ItemList';
import ItemAddForm from '../ItemAdd';
import ADD_ITEM_MUTATION from '../../../../data/graphql/queries/addItemMutation.graphql';
import GET_ITEMS_QUERY from '../../../../data/graphql/queries/getAllItems.graphql';

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

  if (loading) return <p>OK</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <>
      <ItemAddForm type={type} mutation={addItem} />
      <ItemList type={type} />
    </>
  );
}

AdminItemParent.propTypes = {
  type: PropTypes.string.isRequired,
};
