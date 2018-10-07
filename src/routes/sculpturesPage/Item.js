/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Modal from 'react-modal';

import s from './SculpturesItem.css';
import { ITEM_CONSTANTS } from './../../constants';

Modal.setAppElement('#app');

class Item extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      technique: PropTypes.string,
      description: PropTypes.string,
      height: PropTypes.number,
      width: PropTypes.number,
      length: PropTypes.number,
    }).isRequired,
    imageList: PropTypes.array.isRequired,
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
    const { item } = this.props;
    const { imageList } = this.props;

    return (
      <article className={s.item} key={item.title}>
        <h2>{item.title}</h2>
        <button className={s.imageContainer} onClick={this.openModal}>
          <img
            src={imageList[0]}
            alt={ITEM_CONSTANTS.ALT_IMAGE_SCULPTURE}
            className={s.image}
          />
        </button>
        <div>
          <p>
            {item.date}
            <span className={s.spacer}> | </span>
            {item.technique}
            <span className={s.spacer}> | </span>
            {item.height} x {item.width} x {item.length} cm
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
            Marion Casters | <span>{item.title}</span>
          </div>
          <button onClick={this.closeModal}>
            <img
              src={imageList[0]}
              alt={ITEM_CONSTANTS.ALT_IMAGE_SCULPTURE}
              className={s.lightBoxImage}
            />
          </button>
        </Modal>
      </article>
    );
  }
}

export default withStyles(s)(Item);
