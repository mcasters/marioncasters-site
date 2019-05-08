export const types = [
  `
  type AdminStatus {
    isConnected: Boolean!
  }
`,
];

export const queries = [
  `
  adminStatus: AdminStatus!
`,
];

export const mutations = [];

export const defaults = {
  adminStatus: {
    __typename: 'AdminStatus',
    isConnected: false,
  },
};

export const resolvers = {};
