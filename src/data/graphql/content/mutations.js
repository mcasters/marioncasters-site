/* eslint-disable no-param-reassign */

import { Content } from '../../models';

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
  addContent(input: ContentInput!
  ): Boolean
`,
];

export const resolvers = {
  Mutation: {
    addContent: async (parent, { input }) => {
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

      if (content) return true;
      return false;
    },
  },
};
