/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';
import Link from '../Link';

class Feedback extends React.Component {
  render() {
    return (
      <aside>
        <div className={s.container}>
          <Link className={s.link} to="/contact">
            Contact
          </Link>
        </div>
      </aside>
    );
  }
}

export default withStyles(s)(Feedback);
