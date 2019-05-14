import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FaPen } from 'react-icons/fa';
import withStyles from 'isomorphic-style-loader/withStyles';

import UpdateDialog from '../UpdateDialog';
import s from './ItemUpdate.css';

class ItemUpdate extends React.Component {
  static propTypes = {
    item: PropTypes.shape().isRequired,
    type: PropTypes.string.isRequired,
    srcList: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      update: false,
    };

    this.openUpdate = this.openUpdate.bind(this);
  }

  openUpdate = e => {
    e.preventDefault();
    this.setState({ update: true });
  };

  render() {
    const { item, type, srcList } = this.props;
    return (
      <Fragment>
        <button
          type="button"
          onClick={e => {
            this.openUpdate(e);
          }}
          className={s.command}
        >
          <FaPen />
        </button>
        {this.state.update && (
          <UpdateDialog item={item} type={type} srcList={srcList} />
        )}
      </Fragment>
    );
  }
}

export default withStyles(s)(ItemUpdate);
