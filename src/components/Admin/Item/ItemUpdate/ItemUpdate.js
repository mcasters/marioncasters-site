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

    this.openUpdate = this.openUpdate.bind(this);
  }

  state = {
    update: false,
    message: '',
    isError: false,
  };

  openUpdate = e => {
    e.preventDefault();
    this.setState({ update: true });
  };

  handleResult(message, isError) {
    this.setState({ message, isError });
  }

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
          <UpdateDialog
            item={item}
            type={type}
            srcList={srcList}
            getResult={this.handleResult}
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
