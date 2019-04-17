/* eslint-disable no-param-reassign */

import { Content } from '../../models';

export const mutations = [
  `
  setPresentationText(
    text: String!
  ): Boolean
`,
];

export const resolvers = {
  Mutation: {
    setPresentationText: async (parent, { text }) =>
      Content.create({ home_text: text }),
  },
};
