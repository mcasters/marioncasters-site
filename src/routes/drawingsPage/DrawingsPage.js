import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import Item from '../../components/ItemDir/Item';
import ITEM_CONST from '../../constants/itemConstants';
import s from './DrawingsPage.css';
import GET_ITEMS_QUERY from '../../data/graphql/queries/getAllItems.graphql';
import Alert from '../../components/Alert';

function DrawingsPage({ title }) {
  const type = ITEM_CONST.TYPE.DRAWING;
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
        data.getAllItems.map(drawing => (
          <Item key={drawing.id} item={drawing} type={type} />
        ))}
    </>
  );
}

DrawingsPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(DrawingsPage);
