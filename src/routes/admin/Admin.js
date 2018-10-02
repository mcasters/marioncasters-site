import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Admin.css';
import AddPainting from '../../components/AddPainting';

class Admin extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <AddPainting title="Ajout de Peinture" />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Admin);
