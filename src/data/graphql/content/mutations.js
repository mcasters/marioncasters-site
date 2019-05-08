/* eslint-disable no-param-reassign */

import { Content } from '../../models';
import getAuthenticatedUser from '../services/authentication';

export const types = [
  `
  input ContentInput {
    key: String!
    text: String!
  }
  `,
];

export const mutations = [
  `
  addContent(input: ContentInput!): Boolean
`,
];

export const resolvers = {
  Mutation: {
    addContent: async (parent, { input }, { req }) => {
      await getAuthenticatedUser(req);
      const { key } = input;

      let content = await Content.findOne({
        where: { key },
      });
      if (content) {
        content = await content.update({
          text: input.text,
        });
      } else {
        content = await Content.create(input);
      }
      return content != null;
    },
  },
};
