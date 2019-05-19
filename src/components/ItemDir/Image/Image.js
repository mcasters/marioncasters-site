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

    this.state = {
      isOpen: false,
      isLessThanSM: true,
    };

    this.lightBoxHandler = this.lightBoxHandler.bind(this);
    this.getSrc = this.getSrc.bind(this);
    this.getSrcList = this.getSrcList.bind(this);
    this.openLightBox = this.openLightBox.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLessThanSM: this.props.viewport.width < LAYOUT_CONSTANTS.BREAKPOINT.SM,
    });
  }

  lightBoxHandler = open => {
    this.setState({ isOpen: open });
  };

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
      ? `${ITEM_CONST.SCULPTURE_PATH}/${ITEM_CONST.SM_SIZE}`
      : `${ITEM_CONST.SCULPTURE_PATH}/${ITEM_CONST.MD_SIZE}`;

    const list = [];
    let i;
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
    const srcList = this.getSrcList(title);

    if (type === ITEM_CONST.TYPE.SCULPTURE) {
      return (
        <Fragment>
          <div>
            {srcList.map(src => (
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
              srcList={srcList}
              toggle={this.lightBoxHandler}
            />
          )}
        </Fragment>
      );
    }

    const src = this.getSrc(title);
    return (
      <Fragment>
        <button
          type="button"
          className={s.imageButton}
          onClick={this.openLightBox}
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
        {isOpen && typeof window !== 'undefined' && (
          <LightBoxProvider
            title={title}
            type={type}
            src={src}
            toggle={this.lightBoxHandler}
          />
        )}
      </Fragment>
    );
  }
}

export default withStyles(s)(withViewport(Image));
