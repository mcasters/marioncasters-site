import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Modal from 'react-modal';

import s from './PaintingsItem.css';
import { ITEM_CONSTANTS } from './../../constants';

Modal.setAppElement('#app');

class PaintingItem extends React.Component {
  static propTypes = {
    painting: PropTypes.shape({
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
    const { painting } = this.props;
    // eslint-disable-next-line prefer-destructuring
    const src = this.props.src;

    return (
      <article className={s.item} key={painting.title}>
        <h2>{painting.title}</h2>
        <button className={s.imageContainer} onClick={this.openModal}>
          <img
            src={src}
            alt={ITEM_CONSTANTS.ALT_IMAGE_PAINTING}
            className={s.image}
          />
        </button>
        <div>
          <p>
            {painting.date}
            <span className={s.spacer}> | </span>
            {painting.technique}
            <span className={s.spacer}> | </span>
            {painting.height} x {painting.width} cm
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
            Marion Casters | <span>{painting.title}</span>
          </div>
          <button onClick={this.closeModal}>
            <img
              src={src}
              alt={ITEM_CONSTANTS.ALT_IMAGE_PAINTING}
              className={s.lightBoxImage}
            />
          </button>
        </Modal>
      </article>
    );
  }
}

export default withStyles(s)(PaintingItem);
