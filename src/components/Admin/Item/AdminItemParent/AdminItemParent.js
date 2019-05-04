/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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
      <Fragment>
        <ItemAdd type={type} />
        <ItemList type={type} allImages={allImages} />
      </Fragment>
    );
  }
}

export default AdminItemParent;
