import { Sculpture } from '../../models/index';

export const types = [
  `
  input SculptureInput {
    title: String!
    date: String!
    technique: String!
    description: String
    length: Int!
    height: Int!
    width: Int!
  }
  `,
];

export const mutations = [
  `
  createSculpture (
    input: SculptureInput!
  ): DatabaseSculpture
`,
];

export const resolvers = {
  Mutation: {
    async createSculpture(parent, { input }) {
      const lookupSculpture = await Sculpture.findOne({
        where: { title: input.title },
      });

      if (lookupSculpture) {
        // eslint-disable-next-line no-throw-literal
        throw 'Sculpture already exists!';
      }

      // Create new user with profile in database
      return Sculpture.create({
        title: input.title,
        date: input.date,
        technique: input.technique,
        description: input.description,
        length: input.length,
        height: input.height,
        width: input.width,
        imageLocation_1: input.imageLocation_1,
        imageLocation_2: input.imageLocation_2,
        imageLocation_3: input.imageLocation_3,
        imageLocation_4: input.imageLocation_4,
      });
    },
  },
};
