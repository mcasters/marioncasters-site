/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Modal from 'react-modal';
import Lightbox from 'react-image-lightbox';

import s from './SculpturesItem.css';
import { ITEM_CONSTANTS } from './../../constants';

Modal.setAppElement('#app');

class SculptureItem extends React.Component {
  static propTypes = {
    sculpture: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      technique: PropTypes.string,
      description: PropTypes.string,
      height: PropTypes.number,
      width: PropTypes.number,
      length: PropTypes.number,
    }).isRequired,
    srcList: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  open = e => {
    e.preventDefault();
    this.setState({ isOpen: true });
  };

  render() {
    const { sculpture } = this.props;
    const images = this.props.srcList;
    const { photoIndex, isOpen } = this.state;

    return (
      <article className={s.item}>
        <h2>{sculpture.title}</h2>
        {images.map(src => (
          <button className={s.imageContainer} onClick={this.open} key={src}>
            <img
              src={src}
              alt={ITEM_CONSTANTS.ALT_IMAGE_SCULPTURE}
              className={s.image}
            />
          </button>
        ))}
        <div>
          <p>
            {sculpture.date}
            <span className={s.spacer}> | </span>
            {sculpture.technique}
            <span className={s.spacer}> | </span>
            {sculpture.height} x {sculpture.width} x {sculpture.length} cm
          </p>
        </div>
        {isOpen &&
          typeof window !== 'undefined' && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
      </article>
    );
  }
}

export default withStyles(s)(SculptureItem);
