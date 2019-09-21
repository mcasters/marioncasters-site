import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FaPen } from 'react-icons/fa';
import withStyles from 'isomorphic-style-loader/withStyles';

import UpdateDialog from '../UpdateDialog';
import s from './ItemUpdate.css';
import Alert from '../../../Alert';

class ItemUpdate extends React.Component {
  static propTypes = {
    item: PropTypes.shape().isRequired,
    type: PropTypes.string.isRequired,
    srcList: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      openUpdate: false,
      message: '',
      isError: false,
    };

    this.openUpdate = this.openUpdate.bind(this);
  }

  getResult = (message, isError) => {
    return message === null
      ? this.setState({ openUpdate: false })
      : this.setState({ message, isError, openUpdate: false });
  };

  openUpdate = () => {
    this.setState({ openUpdate: true });
  };

  render() {
    const { item, type, srcList } = this.props;
    return (
      <Fragment>
        <button type="button" onClick={this.openUpdate} className={s.command}>
          <FaPen />
        </button>
        {this.state.openUpdate && (
          <UpdateDialog
            item={item}
            type={type}
            srcList={srcList}
            onResult={this.getResult}
          />
        )}
        {this.state.message !== '' && (
          <Alert message={this.state.message} isError={this.state.isError} />
        )}
      </Fragment>
    );
  }
}

export default withStyles(s)(ItemUpdate);
