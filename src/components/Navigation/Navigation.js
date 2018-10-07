/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import logoUrl from './signature-dark-45.png';
import logoUrl2x from './signature-dark-100.png';

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <div className={s.container}>
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
          <Link className={s.linkHome} to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="Signature de Marion Casters"
            />
          </Link>
        </div>
      </nav>
    );
  }
}

export default withStyles(s)(Navigation);
