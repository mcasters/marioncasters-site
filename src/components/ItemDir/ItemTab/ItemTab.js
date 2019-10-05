import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/withStyles';
import GET_ITEMS_BY_PART_QUERY from '../../../data/graphql/queries/getItemsByPart.graphql';
import Item from '../Item/Item';
import s from './ItemTab.css';
import Alert from '../../Alert';

function ItemTab(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const { data, loading, error } = useQuery(GET_ITEMS_BY_PART_QUERY, {
    variables: { year: props.year, type: props.type, half: props.half },
    ssr: true,
  });

  if (loading) return <div className={s.loading}>Chargement...</div>;
  if (error) return <Alert message="Erreur au chargement des items" isError />;

  return (
    <>
      <h2 className={s.titleTab}>{props.year}</h2>
      {data &&
        data.getItemsByPart.map(item => {
          return <Item key={item.title} item={item} type={props.type} />;
        })}
      <button type="button" className={s.buttonLink} onClick={scrollTop}>
        Haut de page
      </button>
    </>
  );
}

ItemTab.propTypes = {
  year: PropTypes.number.isRequired,
  half: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default withStyles(s)(ItemTab);
