import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import Item from '../../components/ItemDir/Item';
import ITEM from '../../constants/item';
import s from './DrawingsPage.css';
import GET_ITEMS_QUERY from '../../data/graphql/queries/getAllItems.graphql';

function DrawingsPage({ title }) {
  const type = ITEM.DRAWING.TYPE;
  const { data, loading, error } = useQuery(GET_ITEMS_QUERY, {
    variables: { type },
    ssr: true,
  });
  if (loading) return <div className={s.loading}>Chargement...</div>;
  if (error) return <div>Erreur au chargement des Dessins :(</div>;

  return (
    <>
      <h1 className={s.title}>{title}</h1>
      {data.getAllItems &&
        data.getAllItems.map((drawing, index) => (
          <Item key={drawing.name} item={drawing} type={type} index={index} />
        ))}
    </>
  );
}

DrawingsPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(DrawingsPage);
