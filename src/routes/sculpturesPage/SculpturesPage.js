import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';

import Item from '../../components/ItemDir/Item';
import ITEM_CONST from '../../constants/itemConstants';
import s from './SculpturesPage.css';
import GET_ITEMS_QUERY from '../../data/graphql/queries/getAllItems.graphql';

function SculpturesPage({ title }) {
  const type = ITEM_CONST.SCULPTURE.TYPE;
  const { data, loading, error } = useQuery(GET_ITEMS_QUERY, {
    variables: { type },
    ssr: true,
  });
  if (loading) return <div className={s.loading}>Chargement...</div>;
  if (error) return <div>Erreur au chargement des sculptures :(</div>;

  return (
    <>
      <h1 className={s.title}>{title}</h1>
      {data.getAllItems &&
        data.getAllItems.map((sculpture, index) => (
          <Item
            key={sculpture.name}
            item={sculpture}
            type={type}
            index={index}
          />
        ))}
    </>
  );
}

SculpturesPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(SculpturesPage);
