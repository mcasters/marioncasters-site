import { Sequelize } from 'sequelize';

import { Drawing, Painting, Sculpture } from '../../models/index';
import ITEM_CONSTANTS from '../../../constants/itemConstants';

export const types = [
  `
  type Item {
    id: ID!
    title: String!
    date: String!
    technique: String!
    description: String
    length: Int
    height: Int!
    width: Int!
  }
`,
];

export const queries = [
  `
  getAllItems(
     type: String!
  ): [Item]
  
  getItemsByYear(
    year: Int!
    type: String!
  ): [Item]
`,
];

export const resolvers = {
  RootQuery: {
    async getAllItems(parent, { type }) {
      if (type === ITEM_CONSTANTS.TYPE.SCULPTURE) return Sculpture.findAll();
      if (type === ITEM_CONSTANTS.TYPE.DRAWING) return Drawing.findAll();
      const paintings = await Painting.findAll();
      return paintings;
    },

    async getItemsByYear(parent, { type, year }) {
      const start = new Date(year, 0, 1);
      const end = new Date(year, 11, 31);
      let items;

      if (type === ITEM_CONSTANTS.TYPE.SCULPTURE)
        items = Sculpture.findAll({
          where: {
            date: {
              gte: start,
              lte: end,
            },
          },
          order: Sequelize.col('date'),
        });

      if (type === ITEM_CONSTANTS.TYPE.DRAWING)
        items = await Painting.findAll({
          where: {
            date: {
              gte: start,
              lte: end,
            },
          },
          order: Sequelize.col('date'),
        });

      items = await Painting.findAll({
        where: {
          date: {
            gte: start,
            lte: end,
          },
        },
        order: Sequelize.col('date'),
      });

      return items;
    },
  },
};
