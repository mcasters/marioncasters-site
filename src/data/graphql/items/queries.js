import { Sequelize } from 'sequelize';

import { Drawing, Painting, Sculpture } from '../../models/index';

export const types = [
  `
  type DatabasePainting {
    id: ID!
    title: String
    date: String
    technique: String
    description: String
    height: Int
    width: Int
  }
  
  type DatabaseSculpture {
    id: ID!
    title: String
    date: String
    technique: String
    description: String
    length: Int
    height: Int
    width: Int
  }
  
  type DatabaseDrawing {
    id: ID!
    title: String
    date: String
    technique: String
    description: String
    height: Int
    width: Int
  }
`,
];

export const queries = [
  `
  getAllPaintings: [DatabasePainting]
  
  getPaintingsByYear(
    year: Int!
  ): [DatabasePainting]
  
  getPainting(
     title: String!
  ): DatabasePainting
  
  getAllDrawings: [DatabaseDrawing]

  getDrawing(
     title: String!
  ): DatabaseDrawing
  
  getAllSculptures: [DatabaseSculpture]

  getSculpture(
     title: String!
  ): DatabaseSculpture
`,
];

export const resolvers = {
  RootQuery: {
    async getAllPaintings() {
      return Painting.findAll();
    },

    async getPainting(parent, title) {
      return Painting.findOne({
        where: { title },
      });
    },

    async getPaintingsByYear(parent, { year }) {
      const start = new Date(year, 0, 1);
      const end = new Date(year, 11, 31);
      return Painting.findAll({
        where: {
          date: {
            gte: start,
            lte: end,
          },
        },
        order: Sequelize.col('date'),
      });
    },

    async getAllSculptures() {
      return Sculpture.findAll();
    },

    async getSculpture(parent, title) {
      return Sculpture.findOne({
        where: { title },
      });
    },

    async getAllDrawings() {
      return Drawing.findAll();
    },

    async getDrawing(parent, title) {
      return Drawing.findOne({
        where: { title },
      });
    },
  },
};
