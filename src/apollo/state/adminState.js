export const initialState = {
  adminStatus: {
    __typename: 'AdminStatus',
    isConnected: false,
  },
};

export const stateResolvers = {
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
