import bcrypt from 'bcrypt';

import { User } from '../../models/index';

export const types = [
  `
  input UserInput {
    username: String!
    email: String!
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
    username: String!
    email: String!
    password: String!
  ): Boolean
  
  login(
    username: String!
    password: String!
  ): Boolean
`,
];

export const resolvers = {
  Mutation: {
    signup: async (parent, { username, email, password }) => {
      const lookupUser = await User.findOne({
        where: { username },
      });

      if (lookupUser) {
        throw new Error('Utilisateur déjà existant');
      }
      await bcrypt.genSalt(10, (saltErr, salt) => {
        bcrypt.hash(password, salt, (hashErr, hashedPassword) => {
          if (saltErr || hashErr) {
            throw new Error('Erreur de hashing du mot de passe');
          }
          User.create({
            username,
            email,
            password: hashedPassword,
          });
        });
      });
      return true;
    },

    login: async (parent, { username, password }, { req }) => {
      const dbUser = await User.findOne({
        where: { username },
      });
      if (!dbUser) {
        throw new Error('Username invalide');
      }
      const match = bcrypt.compare(password, dbUser.password);

      if (match) {
        req.session.isAdmin = dbUser.isAdmin;
        return true;
      }
      req.session.isAdmin = false;
      throw new Error('Mot de passe invalide');
    },
  },
};
