/* eslint-disable no-param-reassign */

import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import config from '../../../config';
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
    signup: async (parent, { input }, { res }) => {
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

      const userId = newUser.id;
      if (userId) {
        const token = jwt.sign(
          {
            userId,
          },
          config.auth.jwt.secret,
          { expiresIn: '1d' },
        );

        res.cookie(config.auth.jwt.name, token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 1000 * 60 * 60 * 24, // 1 days
        });
        return true;
      }
      return false;
    },

    login: async (parent, { input }, { res }) => {
      const dbUser = await User.findOne({
        where: { username: input.username },
      });
      if (!dbUser) throw new Error('Username invalide');

      const match = await bcrypt.compare(input.password, dbUser.password);

      if (!match) throw new Error('Mot de passe invalide');

      const token = jwt.sign(
        {
          userId: dbUser.id,
        },
        config.auth.jwt.secret,
        { expiresIn: '1d' },
      );

      res.cookie(config.auth.jwt.name, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24, // 1 days
      });
      return true;
    },

    logout: async (parent, __, { res }) => {
      res.clearCookie(config.auth.jwt.name);
      return true;
    },
  },
};
