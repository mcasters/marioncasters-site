import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import { useQuery } from '@apollo/react-hooks';

import s from './Footer.css';
import Link from '../../Link';
import LoginControl from '../../LoginControl';
import GLOBAL_CONSTANTS from '../../../constants/globalConstants';
import Feedback from '../Feedback';
import ROUTER from '../../../constants/router';
import GET_ADMIN_STATUS_QUERY from '../../../data/graphql/queries/getAdminStatusQuery.graphql';

function Footer() {
  useStyles(s);
  const { data } = useQuery(GET_ADMIN_STATUS_QUERY);

  const isConnected = data !== undefined && data.adminStatus.isConnected;
  return (
    <footer>
      <Feedback />
      <div className={s.container}>
        <span className={s.text}>{GLOBAL_CONSTANTS.COPYRIGHT}</span>
        <Link className={s.homeLink} to={ROUTER.HOME}>
          Home
        </Link>
        <span className={s.dot}>·</span>
        <LoginControl isConnected={isConnected} />
        <span className={s.dot}>·</span>
        <Link className={s.link} to={ROUTER.CONFIDENTIALITE}>
          Privacy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
