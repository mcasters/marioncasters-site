import React from 'react';
import { useQuery } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import Item from '../../components/ItemDir/Item';
import ITEM_CONST from '../../constants/itemConstants';
import s from './SculpturesPage.css';
import GET_ITEMS_QUERY from '../../data/graphql/queries/getAllItems.graphql';
import Alert from '../../components/Alert';

function SculpturesPage({ title }) {
  const type = ITEM_CONST.TYPE.SCULPTURE;
  const { data, loading, error } = useQuery(GET_ITEMS_QUERY, {
    variables: { type },
    ssr: true,
  });
  if (loading) return <div className={s.loading}>Chargement...</div>;
  if (error) return <Alert message="Erreur au chargement des items" isError />;

  return (
    <>
      <h1 className={s.title}>{title}</h1>
      {data.getAllItems &&
        data.getAllItems.map(sculpture => (
          <Item key={sculpture.id} item={sculpture} type={type} />
        ))}
    </>
  );
}

SculpturesPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(SculpturesPage);
