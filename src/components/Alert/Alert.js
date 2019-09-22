import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const errorCustomStyles = {
  overlay: {
    backgroundColor: 'none',
  },
  content: {
    top: '85%',
    left: '10%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: '#ffa5ac',
  },
};

const validCustomStyles = {
  overlay: {
    backgroundColor: 'none',
  },
  content: {
    top: '85%',
    left: '10%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: '#92ff8e',
  },
};

Modal.setAppElement('#app');

class Alert extends React.Component {
  isMounted = false;

  static propTypes = {
    message: PropTypes.string.isRequired,
    isError: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
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
    }, 4000);
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { message, isError } = this.props;
    return (
      <Modal
        id="alert"
        contentLabel="alert"
        closeTimeoutMS={150}
        isOpen={this.state.showModal}
        onRequestClose={this.handleCloseModal}
        style={isError ? errorCustomStyles : validCustomStyles}
      >
        <div>{message}</div>
      </Modal>
    );
  }
}

export default Alert;
