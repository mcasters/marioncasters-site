import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './PresentationPage.css';
import Content from '../../components/Content';
import CONT_CONST from '../../constants/contentConstants';

function PresentationPage({ title }) {
  return (
    <div className={s.presentationContainer}>
      <h1 className={s.title}>{title}</h1>
      <img
        className={s.image}
        src={`${CONT_CONST.CONTENT_IMAGE_PATH}/${CONT_CONST.PRESENTATION_IMAGE_TITLE}.jpg`}
        alt={CONT_CONST.PRESENTATION_IMAGE_ALT}
      />
      <Content keyContent={CONT_CONST.KEY.PRESENTATION} />
    </div>
  );
}

PresentationPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(PresentationPage);
