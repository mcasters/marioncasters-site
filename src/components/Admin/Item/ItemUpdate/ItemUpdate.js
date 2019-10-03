import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FaPen } from 'react-icons/fa';
import withStyles from 'isomorphic-style-loader/withStyles';

import UpdateDialog from '../UpdateDialog';
import s from './ItemUpdate.css';
import AlertContext from '../../../AlertContext/AlertContext';

class ItemUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openUpdate: false,
    };

    this.openUpdate = this.openUpdate.bind(this);
  }

  getResult = (message, isError) => {
    if (message !== '') this.context.triggerAlert(message, isError);
    this.setState({ openUpdate: false });
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
      </Fragment>
    );
  }
}

ItemUpdate.propTypes = {
  item: PropTypes.shape().isRequired,
  type: PropTypes.string.isRequired,
  srcList: PropTypes.array.isRequired,
};

ItemUpdate.contextType = AlertContext;

export default withStyles(s)(ItemUpdate);
