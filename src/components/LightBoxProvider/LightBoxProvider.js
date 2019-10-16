import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import ITEM_CONST from '../../constants/itemConstants';
import Lightbox from '../Lightbox/Lightbox';
import {
  LIGHTBOX_MOBILE_PADDING,
  LIGHTBOX_PADDING,
} from '../../constants/lightboxConstants';
import LAYOUT_CONSTANTS from '../../constants/layoutConstants';

Modal.setAppElement('#app');

function LightBoxProvider({ title, type, srcList, toggle }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  const close = () => {
    toggle(false);
  };

  if (type === ITEM_CONST.SCULPTURE.TYPE) {
    return (
      <>
        <Lightbox
          mainSrc={srcList[photoIndex]}
          nextSrc={srcList[(photoIndex + 1) % srcList.length]}
          prevSrc={srcList[(photoIndex + srcList.length - 1) % srcList.length]}
          onCloseRequest={() => close()}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + srcList.length - 1) % srcList.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % srcList.length)
          }
          imageTitle={`Marion Casters | ${title}`}
          mobileSizeBreakpoint={LAYOUT_CONSTANTS.BREAKPOINT.MD}
          imagePadding={LIGHTBOX_PADDING}
          imageMobilePadding={LIGHTBOX_MOBILE_PADDING}
        />
      </>
    );
  }

  return (
    <>
      <Lightbox
        mainSrc={srcList[0]}
        onCloseRequest={() => close()}
        imageTitle={`Marion Casters | ${title}`}
        imagePadding={LIGHTBOX_PADDING}
        imageMobilePadding={LIGHTBOX_MOBILE_PADDING}
      />
    </>
  );
}

LightBoxProvider.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  srcList: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default LightBoxProvider;
