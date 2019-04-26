/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo/index';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa/index';

import DELETE_ITEM from './deleteItem.graphql';
import Alert from '../../../Alert';

class ItemDelete extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  render() {
    const { id, type } = this.props;

    return (
      <Mutation mutation={DELETE_ITEM} ssr>
        {(mutation, { data, error }) => (
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
            {error && <Alert message={error} isError />}
            {data && <Alert message="Suppression OK" isError={false} />}
          </Fragment>
        )}
      </Mutation>
    );
  }
}

export default ItemDelete;
