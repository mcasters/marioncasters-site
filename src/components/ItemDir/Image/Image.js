import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './Image.css';
import ITEM_CONST from '../../../constants/itemConstants';
import LAYOUT_CONSTANTS from '../../../constants/layoutConstants';
import withViewport from '../../WithViewport';
import LightBoxProvider from '../../LightBoxProvider';

function Image({ title, type, viewport }) {
  const [isOpen, setIsOpen] = useState(false);
  const isLessThanSM = viewport.width < LAYOUT_CONSTANTS.BREAKPOINT.SM;

  let currentImagePath;
  let largeImagePath;

  const setPath = () => {
    let path;
    if (type === ITEM_CONST.TYPE.PAINTING) {
      path = `${ITEM_CONST.PAINTING_PATH}`;
    }
    if (type === ITEM_CONST.TYPE.DRAWING) {
      path = `${ITEM_CONST.DRAWING_PATH}`;
    }
    if (type === ITEM_CONST.TYPE.SCULPTURE) {
      path = `${ITEM_CONST.SCULPTURE_PATH}`;
    }
    currentImagePath = isLessThanSM
      ? `${path}/${ITEM_CONST.SM_SIZE}`
      : `${path}/${ITEM_CONST.MD_SIZE}`;
    largeImagePath = isLessThanSM ? `${path}/${ITEM_CONST.MD_SIZE}` : `${path}`;
  };

  const lightBoxHandler = open => {
    setIsOpen(open);
  };

  const getSrc = isCurrent => {
    return isCurrent
      ? `${currentImagePath}/${title}.jpg`
      : `${largeImagePath}/${title}.jpg`;
  };

  const getSrcList = isCurrent => {
    const list = [];
    let i;
    const path = isCurrent ? `${currentImagePath}` : `${largeImagePath}`;
    for (i = 1; i < 5; i++) {
      list.push(`${path}/${title}_${i}.jpg`);
    }
    return list;
  };

  const openLightBox = () => {
    setIsOpen(true);
  };

  setPath();

  if (type === ITEM_CONST.TYPE.SCULPTURE) {
    const currentSrcList = getSrcList(true);
    const largeSrcList = getSrcList(false);
    return (
      <>
        <div>
          {currentSrcList.map(src => (
            <button
              type="button"
              className={s.sculptureButton}
              onClick={openLightBox}
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
            toggle={lightBoxHandler}
          />
        )}
      </>
    );
  }

  const currentSrc = getSrc(true);
  const largeSrc = getSrc(false);
  return (
    <>
      <button
        type="button"
        className={s.imageButton}
        onClick={openLightBox}
        key={currentImagePath}
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
          toggle={lightBoxHandler}
        />
      )}
    </>
  );
}

Image.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  viewport: PropTypes.shape({
    width: PropTypes.number.isRequired,
  }).isRequired,
};

export default withStyles(s)(withViewport(Image));
