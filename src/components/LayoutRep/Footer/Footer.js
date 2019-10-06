import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'react-apollo';

import s from './Footer.css';
import Link from '../../Link';
import LoginControl from '../../LoginControl';
import GLOBAL_CONSTANTS from '../../../constants/globalConstants';
import Feedback from '../Feedback';
import ROUTER_CONSTANTS from '../../../constants/routerConstants';
import GET_ADMIN_STATUS_QUERY from '../../../data/graphql/queries/getAdminStatusQuery.graphql';

function Footer() {
  const { data } = useQuery(GET_ADMIN_STATUS_QUERY, {
    ssr: true,
  });

  const isConnected = data !== undefined && data.adminStatus.isConnected;
  return (
    <footer>
      <Feedback />
      <div className={s.container}>
        <span className={s.text}>{GLOBAL_CONSTANTS.COPYRIGHT}</span>
        <span className={s.dot}>·</span>
        <Link className={s.homeLink} to={ROUTER_CONSTANTS.ROUTER.HOME}>
          Home
        </Link>
        <span className={s.dot}>·</span>
        <LoginControl isConnected={isConnected} />
        <span className={s.dot}>·</span>
        <Link className={s.link} to={ROUTER_CONSTANTS.ROUTER.CONFIDENTIALITE}>
          Privacy
        </Link>
      </div>
    </footer>
  );
}

export default withStyles(s)(Footer);
