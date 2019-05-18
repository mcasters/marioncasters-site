import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './ImageButton.css';
import ITEM_CONST from '../../../constants/itemConstants';
import LAYOUT_CONSTANTS from '../../../constants/layoutConstants';
import withViewport from '../../WithViewport';

class ImageButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isLessThanSM: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLessThanSM: this.props.viewport.width < LAYOUT_CONSTANTS.BREAKPOINT.SM,
    });
  }

  getSrc = title => {
    const path =
      this.props.type === ITEM_CONST.TYPE.PAINTING
        ? `${ITEM_CONST.PAINTING_PATH}`
        : `${ITEM_CONST.DRAWING_PATH}`;
    return this.state.isLessThanSM
      ? `${path}/${ITEM_CONST.SM_SIZE}/${title}.jpg`
      : `${path}/${ITEM_CONST.MD_SIZE}/${title}.jpg`;
  };

  getSrcList = title => {
    const path = this.state.isLessThanSM
      ? `${ITEM_CONST.SCULPTURE_PATH}/${ITEM_CONST.SM_SIZE}/${title}.jpg`
      : `${ITEM_CONST.SCULPTURE_PATH}/${ITEM_CONST.MD_SIZE}/${title}.jpg`;

    const list = [];
    let i;
    for (i = 1; i < 5; i++) {
      list.push(`${path}/${title}_${i}.jpg`);
    }
    return list;
  };

  render() {
    const { title, type } = this.props;
    const srcList = this.getSrcList(title);

    if (type === ITEM_CONST.TYPE.SCULPTURE) {
      return (
        <Fragment>
          {srcList.map(src => (
            <button
              type="button"
              className={s.sculptureButton}
              onClick={this.open}
              key={src}
            >
              <img
                src={src}
                alt={ITEM_CONST.ALT_IMAGE_SCULPTURE}
                className={s.image}
              />
            </button>
          ))}
        </Fragment>
      );
    }

    const src = this.getSrc(title);
    return (
      <button
        type="button"
        className={s.imageButton}
        onClick={this.open}
        key={src}
      >
        <img
          src={src}
          alt={
            type === ITEM_CONST.TYPE.PAINTING
              ? ITEM_CONST.ALT_IMAGE_PAINTING
              : ITEM_CONST.ALT_IMAGE_DRAWING
          }
          className={s.image}
        />
      </button>
    );
  }
}

export default withStyles(s)(withViewport(ImageButton));
