import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FaPen } from 'react-icons/fa';

// eslint-disable-next-line import/no-unresolved
import UpdateDialog from '../updateDialog.js';

class ItemUpdate extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
      technique: PropTypes.string,
      description: PropTypes.string,
      height: PropTypes.number,
      width: PropTypes.number,
      length: PropTypes.number,
    }).isRequired,
    type: PropTypes.string.isRequired,
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
    const { item, type } = this.props;
    return (
      <Fragment>
        <button
          type="button"
          onClick={e => {
            this.openUpdate(e);
          }}
        >
          <FaPen />
        </button>
        {this.state.update && <UpdateDialog item={item} type={type} />}
      </Fragment>
    );
  }
}

export default ItemUpdate;
