import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import s from './PresentationPage.css';
import Content from '../../components/Content';
import contentConstants from '../../constants/contentConstants';

class PresentationPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const CONTENT_CONSTANTS = contentConstants;
    const { title } = this.props;
    return (
      <div className={s.presentationContainer}>
        <h1 className={s.title}>{title}</h1>
        <img
          className={s.image}
          src="./portrait.jpg"
          alt="Portrait de Marion Casters"
        />
        <Content keyContent={CONTENT_CONSTANTS.KEY.PRESENTATION} />
      </div>
    );
  }
}

export default withStyles(s)(PresentationPage);
