import React from 'react';
import PropTypes from 'prop-types';
import { FaPen } from 'react-icons/fa';
import withStyles from 'isomorphic-style-loader/withStyles';

import UpdateForm from './UpdateForm/UpdateForm';
import s from './ItemUpdateButton.css';
import AlertContext from '../../../AlertContext/AlertContext';

class ItemUpdateButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openUpdate: false,
    };

    this.openUpdate = this.openUpdate.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  getResult = isError => {
    if (!isError) this.setState({ openUpdate: false });
  };

  openUpdate = () => {
    this.setState({ openUpdate: true });
  };

  render() {
    const { item, type, srcList } = this.props;
    return (
      <>
        <button type="button" onClick={this.openUpdate} className={s.command}>
          <FaPen />
        </button>
        {this.state.openUpdate && (
          <UpdateForm
            item={item}
            type={type}
            srcList={srcList}
            updateMutation={this.props.updateMutation}
            onResult={this.getResult}
          />
        )}
      </>
    );
  }
}

ItemUpdateButton.propTypes = {
  item: PropTypes.shape().isRequired,
  type: PropTypes.string.isRequired,
  srcList: PropTypes.array.isRequired,
  updateMutation: PropTypes.func.isRequired,
};

ItemUpdateButton.contextType = AlertContext;

export default withStyles(s)(ItemUpdateButton);
