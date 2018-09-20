import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Brand.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './signature-dark-45.png';
import logoUrl2x from './signature-dark-100.png';

class Brand extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="Marion Casters signature"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Brand);
