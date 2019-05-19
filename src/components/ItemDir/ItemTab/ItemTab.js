/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/withStyles';

import ITEM_CONST from '../../../constants/itemConstants';
import GET_ITEMS_BY_YEAR_QUERY from '../../../data/graphql/queries/getItemsByYear.graphql';
import GET_ITEMS_BY_HALF_YEAR_QUERY from '../../../data/graphql/queries/getItemsByHalfYear.graphql';
import Item from '../Item/Item';
import s from './ItemTab.css';
import Alert from '../../Alert';

class ItemTab extends React.Component {
  static propTypes = {
    year: PropTypes.number.isRequired,
    half: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  };

  scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  render() {
    const { year, half, type } = this.props;

    return half === 0 ? (
      <Query query={GET_ITEMS_BY_YEAR_QUERY} variables={{ year, type }} ssr>
        {({ loading, error, data }) => {
          if (loading) return <div className={s.loading}>Chargement...</div>;

          return (
            <Fragment>
              <h2 className={s.titleTab}>{year}</h2>
              {data.getItemsByYear.map(item => {
                return (
                  <Item
                    key={item.title}
                    item={item}
                    type={ITEM_CONST.TYPE.PAINTING}
                  />
                );
              })}
              {error && (
                <Alert message="Erreur au chargement des items" isError />
              )}
              <button
                type="button"
                className={s.buttonLink}
                onClick={this.scrollTop}
              >
                Haut de page
              </button>
            </Fragment>
          );
        }}
      </Query>
    ) : (
      <Query
        query={GET_ITEMS_BY_HALF_YEAR_QUERY}
        variables={{ year, type, half }}
        ssr
      >
        {({ loading, error, data }) => {
          if (loading) return <div className={s.loading}>Chargement...</div>;

          return (
            <Fragment>
              <h2 className={s.titleTab}>{year}</h2>
              {data.getItemsByHalfYear.map(item => {
                return (
                  <Item
                    key={item.title}
                    item={item}
                    type={ITEM_CONST.TYPE.PAINTING}
                  />
                );
              })}
              {error && (
                <Alert message="Erreur au chargement des items" isError />
              )}
              <button
                type="button"
                className={s.buttonLink}
                onClick={this.scrollTop}
              >
                Haut de page
              </button>
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(s)(ItemTab);
