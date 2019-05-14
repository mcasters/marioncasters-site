import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ItemList from '../ItemList';
import ItemAdd from '../ItemAdd';

class AdminItemParent extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
  };

  render() {
    const { type } = this.props;

    return (
      <Fragment>
        <ItemAdd type={type} />
        <ItemList type={type} />
      </Fragment>
    );
  }
}

export default AdminItemParent;
