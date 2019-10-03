import React from 'react';
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

class LightBoxProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
    };
  }

  close = () => {
    this.props.toggle(false);
  };

  render() {
    const { title, type, srcList, src } = this.props;
    const { photoIndex } = this.state;

    if (type === ITEM_CONST.TYPE.SCULPTURE) {
      return (
        <>
          <Lightbox
            mainSrc={srcList[photoIndex]}
            nextSrc={srcList[(photoIndex + 1) % srcList.length]}
            prevSrc={
              srcList[(photoIndex + srcList.length - 1) % srcList.length]
            }
            onCloseRequest={() => this.close()}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + srcList.length - 1) % srcList.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % srcList.length,
              })
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
          mainSrc={src}
          onCloseRequest={() => this.close()}
          imageTitle={`Marion Casters | ${title}`}
          imagePadding={LIGHTBOX_PADDING}
          imageMobilePadding={LIGHTBOX_MOBILE_PADDING}
        />
      </>
    );
  }
}

LightBoxProvider.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  srcList: PropTypes.array,
  src: PropTypes.string,
  toggle: PropTypes.func.isRequired,
};

LightBoxProvider.defaultProps = {
  srcList: [],
  src: '',
};

export default LightBoxProvider;
