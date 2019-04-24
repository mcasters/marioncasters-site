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

export const mutations = [
  `
  updateAdminStatus(isConnected: Boolean): AdminStatus!
`,
];

export const defaults = {
  adminStatus: {
    __typename: 'AdminStatus',
    isConnected: false,
  },
};

export const resolvers = {
  Mutation: {
    updateAdminStatus: (_, { isConnected }, { cache }) => {
      const data = {
        adminStatus: {
          __typename: 'AdminStatus',
          isConnected,
        },
      };
      cache.writeData({ data });
      return null;
    },
  },
};
