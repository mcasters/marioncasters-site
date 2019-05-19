import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './Image.css';
import ITEM_CONST from '../../../constants/itemConstants';
import LAYOUT_CONSTANTS from '../../../constants/layoutConstants';
import withViewport from '../../WithViewport';
import LightBoxProvider from '../../LightBoxProvider';

class Image extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.isLessThanSM =
      this.props.viewport.width < LAYOUT_CONSTANTS.BREAKPOINT.SM;

    this.setPath();

    this.state = {
      isOpen: false,
    };

    this.lightBoxHandler = this.lightBoxHandler.bind(this);
    this.getSrc = this.getSrc.bind(this);
    this.getSrcList = this.getSrcList.bind(this);
    this.openLightBox = this.openLightBox.bind(this);
  }

  setPath = () => {
    let path;
    if (this.props.type === ITEM_CONST.TYPE.PAINTING) {
      path = `${ITEM_CONST.PAINTING_PATH}`;
    }
    if (this.props.type === ITEM_CONST.TYPE.DRAWING) {
      path = `${ITEM_CONST.DRAWING_PATH}`;
    }
    if (this.props.type === ITEM_CONST.TYPE.SCULPTURE) {
      path = `${ITEM_CONST.SCULPTURE_PATH}`;
    }
    this.currentImagePath = this.isLessThanSM
      ? `${path}/${ITEM_CONST.SM_SIZE}`
      : `${path}/${ITEM_CONST.MD_SIZE}`;
    this.largeImagePath = this.isLessThanSM
      ? `${path}/${ITEM_CONST.MD_SIZE}`
      : `${path}`;
  };

  lightBoxHandler = open => {
    this.setState({ isOpen: open });
  };

  getSrc = (title, isCurrent) => {
    return isCurrent
      ? `${this.currentImagePath}/${title}.jpg`
      : `${this.largeImagePath}/${title}.jpg`;
  };

  getSrcList = (title, isCurrent) => {
    const list = [];
    let i;
    const path = isCurrent
      ? `${this.currentImagePath}`
      : `${this.largeImagePath}`;
    for (i = 1; i < 5; i++) {
      list.push(`${path}/${title}_${i}.jpg`);
    }
    return list;
  };

  openLightBox = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { title, type } = this.props;
    const { isOpen } = this.state;

    if (type === ITEM_CONST.TYPE.SCULPTURE) {
      const currentSrcList = this.getSrcList(title, true);
      const largeSrcList = this.getSrcList(title, false);
      return (
        <Fragment>
          <div>
            {currentSrcList.map(src => (
              <button
                type="button"
                className={s.sculptureButton}
                onClick={this.openLightBox}
                key={src}
              >
                <img
                  src={src}
                  alt={ITEM_CONST.ALT_IMAGE_SCULPTURE}
                  className={s.image}
                />
              </button>
            ))}
          </div>
          {isOpen && typeof window !== 'undefined' && (
            <LightBoxProvider
              title={title}
              type={type}
              srcList={largeSrcList}
              toggle={this.lightBoxHandler}
            />
          )}
        </Fragment>
      );
    }

    const currentSrc = this.getSrc(title, true);
    const largeSrc = this.getSrc(title, false);
    return (
      <Fragment>
        <button
          type="button"
          className={s.imageButton}
          onClick={this.openLightBox}
          key={this.currentImagePath}
        >
          <img
            src={currentSrc}
            alt={
              type === ITEM_CONST.TYPE.PAINTING
                ? ITEM_CONST.ALT_IMAGE_PAINTING
                : ITEM_CONST.ALT_IMAGE_DRAWING
            }
            className={s.image}
          />
        </button>
        {isOpen && typeof window !== 'undefined' && (
          <LightBoxProvider
            title={title}
            type={type}
            src={largeSrc}
            toggle={this.lightBoxHandler}
          />
        )}
      </Fragment>
    );
  }
}

export default withStyles(s)(withViewport(Image));
