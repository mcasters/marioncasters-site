import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import withStyles from 'isomorphic-style-loader/withStyles';

import ITEM_CONST from '../../../../constants/itemConstants';
import ItemRow from '../ItemRow';
import s from './ItemList.css';
import GET_ITEMS_QUERY from '../../../../data/graphql/queries/getAllItems.graphql';
import Alert from '../../../Alert';

function ItemList({ type, deleteMutation, updateMutation }) {
  const getUrlImages = itemTitle => {
    const imagesForItem = [];
    if (type === ITEM_CONST.TYPE.SCULPTURE) {
      let i = 1;
      while (i < 5) {
        imagesForItem.push(
          `${ITEM_CONST.SCULPTURE_PATH}/sm/${itemTitle}_${i}.jpg`,
        );
        i++;
      }
    } else if (type === ITEM_CONST.TYPE.PAINTING) {
      imagesForItem.push(`${ITEM_CONST.PAINTING_PATH}/sm/${itemTitle}.jpg`);
    } else imagesForItem.push(`${ITEM_CONST.DRAWING_PATH}/sm/${itemTitle}.jpg`);
    return imagesForItem;
  };

  const title = 'Modification - Suppression';
  const isSculpture = type === ITEM_CONST.TYPE.SCULPTURE;
  const { data, loading, error } = useQuery(GET_ITEMS_QUERY, {
    variables: { type },
    ssr: true,
  });

  if (loading) return <div>Chargement...</div>;
  if (error) return <Alert message="Erreur au chargement des items" isError />;

  return (
    <div className={s.listContainer}>
      <h2>{title}</h2>
      <table className={s.adminList}>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Date</th>
            <th>Technique</th>
            <th>Description</th>
            <th>Hauteur</th>
            <th>Largeur</th>
            {isSculpture && <th>Longueur</th>}
            <th>Image</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.getAllItems !== undefined &&
            data.getAllItems.map(item => (
              <ItemRow
                key={item.id}
                item={item}
                srcList={getUrlImages(item.title)}
                type={type}
                deleteMutation={deleteMutation}
                updateMutation={updateMutation}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

ItemList.propTypes = {
  type: PropTypes.string.isRequired,
  deleteMutation: PropTypes.func.isRequired,
  updateMutation: PropTypes.func.isRequired,
};

export default withStyles(s)(ItemList);
