import { Sculpture } from '../../models/index';

export const types = [
  `
  type DatabaseSculpture {
    id: String
    title: String
    date: String
    technique: String
    description: String
    length: Int
    height: Int
    width: Int
  }
`,
];

export const queries = [
  `
  getAllSculptures: [DatabaseSculpture]

  getSculpture(
     title: String!
  ): DatabaseSculpture
`,
];

export const resolvers = {
  RootQuery: {
    async getAllSculptures() {
      return Sculpture.findAll();
    },
    async getSculpture(parent, title) {
      return Sculpture.findOne({
        where: { title },
      });
    },
  },
};
