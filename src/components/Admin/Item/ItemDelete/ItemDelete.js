/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo/index';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa/index';
import withStyles from 'isomorphic-style-loader/withStyles';

import DELETE_ITEM from '../../../../data/graphql/queries/deleteItem.graphql';
import GET_ITEMS_QUERY from '../../../../data/graphql/queries/getAllItems.graphql';
import s from './ItemDelete.css';
import AlertContext from '../../../AlertContext/AlertContext';

class ItemDelete extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  static contextType = AlertContext;

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
        onError={error => this.context.triggerAlert(error.message, true)}
        onCompleted={() => this.context.triggerAlert('Item supprimé', false)}
      >
        {mutation => (
          <Fragment>
            <form
              onSubmit={e => {
                e.preventDefault();
                mutation({ variables: { id, type } });
              }}
            >
              <button type="submit" className={s.command}>
                <FaTrash />
              </button>
            </form>
          </Fragment>
        )}
      </Mutation>
    );
  }
}

export default withStyles(s)(ItemDelete);
