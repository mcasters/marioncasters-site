/* eslint-disable no-param-reassign */

import { Content } from '../../models';
import getAuthenticatedUser from '../common/checkAuth';

export const types = [
  `
  input ContentInput {
    label: String!
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
      const { label } = input;

      let content = await Content.findOne({
        where: { label },
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
