import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/presentation">
          Présentation
        </Link>
        <Link className={s.link} to="/peintures">
          Peintures
        </Link>
        <Link className={s.link} to="/sculptures">
          Sculptures
        </Link>
        <Link className={s.link} to="/dessins">
          Dessins
        </Link>
        <Link className={s.link} to="/contact">
          Contact
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
