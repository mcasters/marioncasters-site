/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const errorCustomStyles = {
  overlay: {
    backgroundColor: 'none',
  },
  content: {
    top: '85%',
    left: '15%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffeded',
  },
};

const validCustomStyles = {
  overlay: {
    backgroundColor: 'none',
  },
  content: {
    top: '85%',
    left: '15%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#eaffee',
  },
};

Modal.setAppElement('#app');

class Alert extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    isError: PropTypes.bool.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentDidMount() {
    this.isMounted = true;

    this.handleOpenModal();
    setInterval(() => {
      if (this.isMounted) this.handleCloseModal();
    }, 3000);
  }

  componentWillUnmount() {
    this.isMounted = false;
  }
  isMounted = false;

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const style = this.props.isError ? errorCustomStyles : validCustomStyles;

    return (
      <Modal
        id="alert"
        contentLabel="alert"
        closeTimeoutMS={150}
        isOpen={this.state.showModal}
        onRequestClose={this.handleCloseModal}
        style={style}
      >
        <div>{this.props.message}</div>
      </Modal>
    );
  }
}

export default Alert;
