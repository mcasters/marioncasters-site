/* eslint-disable no-param-reassign */
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
  
  logout: Boolean
`,
];

export const resolvers = {
  Mutation: {
    signup: async (parent, { input }, { req }) => {
      const lookupUser = await User.findOne({
        where: { username: input.username },
      });

      if (lookupUser) {
        throw new Error('Utilisateur déjà existant');
      }

      const hashPassword = await bcrypt.hash(input.password, 10);

      if (!hashPassword) {
        throw new Error('Erreur de hashing du mot de passe');
      }

      const newUser = await User.create({
        username: input.username,
        email: input.email,
        password: hashPassword,
      });

      if (!newUser) throw new Error('Erreur à la création du user en BDD');

      req.session.userId = newUser.id;

      return true;
    },

    login: async (parent, { input }, { req }) => {
      const dbUser = await User.findOne({
        where: { username: input.username },
      });
      if (!dbUser) throw new Error('Username invalide');

      const match = await bcrypt.compare(input.password, dbUser.password);

      if (!match) throw new Error('Mot de passe invalide');

      req.session.userId = dbUser.id;

      return true;
    },
  },
};