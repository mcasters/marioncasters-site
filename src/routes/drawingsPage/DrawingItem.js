import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Modal from 'react-modal';

import s from './DrawingsItem.css';
import { ITEM_CONSTANTS } from './../../constants';

Modal.setAppElement('#app');

class DrawingItem extends React.Component {
  static propTypes = {
    drawing: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      technique: PropTypes.string,
      description: PropTypes.string,
      height: PropTypes.number,
      width: PropTypes.number,
    }).isRequired,
    src: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    const { drawing } = this.props;
    const { src } = this.props;

    return (
      <article className={s.item} key={drawing.title}>
        <h2>{drawing.title}</h2>
        <button className={s.imageContainer} onClick={this.openModal}>
          <img
            src={src}
            alt={ITEM_CONSTANTS.ALT_IMAGE_DRAWING}
            className={s.image}
          />
        </button>
        <div>
          <p>
            {drawing.date}
            <span className={s.spacer}> | </span>
            {drawing.technique}
            <span className={s.spacer}> | </span>
            {drawing.height} x {drawing.width} cm
          </p>
        </div>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
          closeTimeoutMS={200}
          shouldCloseOnOverlayClick
          style={{
            overlay: {
              textAlign: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              zIndex: 2,
            },
            content: {
              position: 'initial',
              background: 'none',
              border: 'none',
            },
          }}
        >
          <div className={s.lightBoxText}>
            Marion Casters | <span>{drawing.title}</span>
          </div>
          <button onClick={this.closeModal}>
            <img
              src={src}
              alt={ITEM_CONSTANTS.ALT_IMAGE_DRAWING}
              className={s.lightBoxImage}
            />
          </button>
        </Modal>
      </article>
    );
  }
}

export default withStyles(s)(DrawingItem);
