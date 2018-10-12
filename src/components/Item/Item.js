/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Modal from 'react-modal';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import s from './Item.css';
import ITEM_CONSTANTS from './../../constants/itemConstants';

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
    srcList: PropTypes.array.isRequired,
    itemType: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
    this.image = React.createRef();
  }

  open = e => {
    e.preventDefault();
    this.setState({ isOpen: true });
  };

  render() {
    const { item, itemType, srcList } = this.props;
    const { photoIndex, isOpen } = this.state;

    if (itemType === ITEM_CONSTANTS.TYPE.SCULPTURE) {
      return (
        <article className={s.item}>
          <h2>{item.title}</h2>
          <div>
            {srcList.map(src => (
              <button
                className={s.sculptureButton}
                onClick={this.open}
                key={src}
              >
                <img
                  src={src}
                  alt={ITEM_CONSTANTS.ALT_IMAGE_SCULPTURE}
                  className={s.sculptureImage}
                />
              </button>
            ))}
          </div>
          <div>
            <p>
              <span className={s.noWrap}>{item.date}</span>
              <span className={s.spacer}> | </span>
              <span className={s.noWrap}>{item.technique}</span>
              <span className={s.spacer}> | </span>
              <span className={s.noWrap}>
                {item.height} x {item.width} x {item.length} cm
              </span>
            </p>
          </div>
          {isOpen &&
            typeof window !== 'undefined' && (
              <Lightbox
                mainSrc={srcList[photoIndex]}
                nextSrc={srcList[(photoIndex + 1) % srcList.length]}
                prevSrc={
                  srcList[(photoIndex + srcList.length - 1) % srcList.length]
                }
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + srcList.length - 1) % srcList.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % srcList.length,
                  })
                }
                imageTitle={`Marion Casters | ${item.title}`}
              />
            )}
        </article>
      );
    }

    const src = srcList[0];
    return (
      <article className={s.item}>
        <h2>{item.title}</h2>
        <div>
          <button onClick={this.open}>
            <img
              src={src}
              ref={this.image}
              alt={
                itemType === ITEM_CONSTANTS.TYPE.PAINTING
                  ? ITEM_CONSTANTS.ALT_IMAGE_PAINTING
                  : ITEM_CONSTANTS.ALT_IMAGE_DRAWING
              }
              className={s.image}
            />
          </button>
        </div>
        <div>
          <p>
            <span className={s.noWrap}>{item.date}</span>
            <span className={s.spacer}> | </span>
            <span className={s.noWrap}>{item.technique}</span>
            <span className={s.spacer}> | </span>
            <span className={s.noWrap}>
              {item.height} x {item.width} cm
            </span>
          </p>
        </div>
        {isOpen &&
          typeof window !== 'undefined' && (
            <Lightbox
              mainSrc={srcList[photoIndex]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              imageTitle={`Marion Casters | ${item.title}`}
              imagePadding={90}
            />
          )}
      </article>
    );
  }
}

export default withStyles(s)(Item);
