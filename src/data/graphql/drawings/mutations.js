/* eslint-disable spaced-comment */
import { Drawing } from '../../models/index';

export const types = [
  `
  input DrawingInput {
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
  addDrawing (
    input: DrawingInput!
  ): DatabaseDrawing
  
  deleteDrawing(
     id: ID!
  ): Boolean
`,
];

export const resolvers = {
  Mutation: {
    async addDrawing(root, { input }) {
      const lookupDrawing = await Drawing.findOne({
        where: { title: input.title },
      });

      if (lookupDrawing) {
        // eslint-disable-next-line no-throw-literal
        throw 'Drawing already exists!';
      }

      // Create new user with profile in database
      return Drawing.create({
        title: input.title,
        date: input.date,
        technique: input.technique,
        description: input.description,
        height: input.height,
        width: input.width,
      });
    },
    async deleteDrawing(root, { id }) {
      await Drawing.destroy({
        where: { id },
      });
      return true;
    },
  },
};
