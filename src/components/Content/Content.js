import React from 'react';
import { useQuery } from 'react-apollo';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';

import GET_CONTENT from '../../data/graphql/queries/getContent.graphql';
import s from './Content.css';

function Content({ keyContent }) {
  const { data, loading } = useQuery(GET_CONTENT, {
    variables: { keyContent },
    ssr: true,
  });
  if (loading) return <p>Chargement...</p>;

  return (
    <>
      {data.getContent && <p className={s.content}>{data.getContent.text}</p>}
    </>
  );
}

Content.propTypes = {
  keyContent: PropTypes.string.isRequired,
};

export default withStyles(s)(Content);
