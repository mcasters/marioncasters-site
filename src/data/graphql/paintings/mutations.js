/* eslint-disable spaced-comment */
import { Painting } from '../../models/index';

export const types = [
  `
  input PaintingInput {
    title: String!
    date: String!
    technique: String!
    description: String
    height: Int!
    width: Int!
  }
  `,
];

export const mutations = [
  `
  addPainting (
    input: PaintingInput! 
  ): DatabasePainting
`,
];

export const resolvers = {
  Mutation: {
    async addPainting(root, { input }) {
      const lookupPainting = await Painting.findOne({
        where: { title: input.title },
      });

      if (lookupPainting) {
        // eslint-disable-next-line no-throw-literal
        throw 'Painting already exists!';
      }

      return Painting.create({
        title: input.title,
        date: input.date,
        technique: input.technique,
        description: input.description,
        height: input.height,
        width: input.width,
      });
    },
  },
};
