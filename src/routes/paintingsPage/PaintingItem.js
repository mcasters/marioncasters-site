import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Lightbox from 'react-image-lightbox';
import s from './PaintingsItem.css';
import { itemConstants } from './../../constants';

class PaintingItem extends React.Component {
  static propTypes = {
    painting: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      technique: PropTypes.string,
      description: PropTypes.string,
      height: PropTypes.int,
      width: PropTypes.int,
      imageLocation: PropTypes.string,
    }).isRequired,
    src: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { painting } = this.props;
    const { src } = this.props;
    const { isOpen } = this.state;

    return (
      <article className={s.item} key={painting.title}>
        <h2 className={s.itemTitle}>{painting.title}</h2>
        <button
          className={s.imageContainer}
          onClick={() => this.setState({ isOpen: true })}
        >
          <img
            src={src}
            alt={itemConstants.ALT_IMAGE_PAINTING}
            className={s.image}
          />
        </button>
        <div className={s.itemDesc}>
          <p>
            {painting.date}
            <span className={s.spacer}> | </span>
            {painting.technique}
            <span className={s.spacer}> | </span>
            {painting.height} x {painting.width} cm
          </p>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={src}
            onCloseRequest={() => this.setState({ isOpen: false })}
            imagePadding={itemConstants.IMAGE_PADDING}
          />
        )}
      </article>
    );
  }
}

export default withStyles(s)(PaintingItem);
