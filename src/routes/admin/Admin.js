import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Admin.css';
import AddItem from '../../components/AddItem';
import ITEM_CONSTANTS from '../../constants/itemConstants';

class Admin extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <AddItem type={ITEM_CONSTANTS.TYPE.PAINTING} />
          <AddItem type={ITEM_CONSTANTS.TYPE.SCULPTURE} />
          <AddItem type={ITEM_CONSTANTS.TYPE.DRAWING} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Admin);
