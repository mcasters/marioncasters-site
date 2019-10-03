import React from 'react';
import PropTypes from 'prop-types';

import ItemList from '../ItemList';
import ItemAdd from '../ItemAdd';

class AdminItemParent extends React.Component {
  render() {
    const { type } = this.props;

    return (
      <>
        <ItemAdd type={type} />
        <ItemList type={type} />
      </>
    );
  }
}

AdminItemParent.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AdminItemParent;
