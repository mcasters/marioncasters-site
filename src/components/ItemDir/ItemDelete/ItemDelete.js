/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

import ITEM_CONSTANTS from '../../../constants/itemConstants';
import DELETE_PAINTING from './deletePainting.graphql';
import DELETE_DRAWING from './deleteDrawing.graphql';
import DELETE_SCULPTURE from './deleteSculpture.graphql';

class ItemDelete extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  getQuery = type => {
    switch (type) {
      case ITEM_CONSTANTS.TYPE.PAINTING:
        return DELETE_PAINTING;
      case ITEM_CONSTANTS.TYPE.DRAWING:
        return DELETE_DRAWING;
      case ITEM_CONSTANTS.TYPE.SCULPTURE:
        return DELETE_SCULPTURE;
      default:
        return null;
    }
  };

  render() {
    const { id, type } = this.props;
    const query = this.getQuery(type);

    return (
      <Mutation mutation={query} key={id} ssr>
        {(mutation, { error }) => (
          <Fragment>
            <form
              onSubmit={e => {
                e.preventDefault();
                mutation({ variables: { id } });
              }}
            >
              <button type="submit">
                <FaTrash />
              </button>
            </form>
            {error && <p>Erreur : {error}</p>}
          </Fragment>
        )}
      </Mutation>
    );
  }
}

export default ItemDelete;
