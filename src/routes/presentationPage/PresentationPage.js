import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './PresentationPage.css';
import Content from '../../components/Content';
import CONTENT_CONST from '../../constants/contentConstants';

class PresentationPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;
    return (
      <div className={s.presentationContainer}>
        <h1 className={s.title}>{title}</h1>
        <img
          className={s.image}
          src={`${CONTENT_CONST.PRESENTATION_IMAGE_PATH}/${
            CONTENT_CONST.PRESENTATION_IMAGE_TITLE
          }.jpg`}
          alt={CONTENT_CONST.PRESENTATION_IMAGE_ALT}
        />
        <Content keyContent={CONTENT_CONST.KEY.PRESENTATION} />
      </div>
    );
  }
}

export default withStyles(s)(PresentationPage);
