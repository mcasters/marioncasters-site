import bcrypt from 'bcrypt';

import { User } from '../../models/index';

export const types = [
  `
  input SignupInput {
    username: String!
    email: String!
    password: String!
  }
  
  input LoginInput {
    username: String!
    password: String!
  }
  
  type AuthPayload {
    token: String!
    refreshToken: String!
  }
`,
];

export const mutations = [
  `
  signup(
    input: SignupInput!
  ): Boolean
  
  login(
    input: LoginInput!
  ): Boolean
  
  logout(
    username: String!
  ): Boolean
`,
];

export const resolvers = {
  Mutation: {
    signup: async (parent, { input }) => {
      const lookupUser = await User.findOne({
        where: { username: input.username },
      });

      if (lookupUser) {
        throw new Error('Utilisateur déjà existant');
      }
      await bcrypt.genSalt(10, (saltErr, salt) => {
        bcrypt.hash(input.password, salt, (hashErr, hashedPassword) => {
          if (saltErr || hashErr) {
            throw new Error('Erreur de hashing du mot de passe');
          }
          User.create({
            username: input.username,
            email: input.email,
            password: hashedPassword,
          });
        });
      });
      return true;
    },

    login: async (parent, { input }, { req }) => {
      const dbUser = await User.findOne({
        where: { username: input.username },
      });
      if (!dbUser) {
        req.session.isConnected = false;
        throw new Error('Username invalide');
      }
      const match = bcrypt.compare(input.password, dbUser.password);

      if (match) {
        req.session.isConnected = true;
        return true;
      }
      req.session = false;
      throw new Error('Mot de passe invalide');
    },

    logout: async (parent, username, { req }) => {
      req.session.isConnected = false;
      return true;
    },
  },
};
