/* eslint-disable spaced-comment */
import fs from 'fs';

import { Drawing } from '../../models/index';
import { deleteImage } from '../../../imageServices';
import ITEM_CONSTANTS from '../../../constants/itemConstants';
import config from '../../../config';

export const types = [
  `
  input DrawingInput {
    picture: Upload!
    title: String!
    date: String!
    technique: String!
    description: String
    height: Int!
    width: Int!
  }
  `,
];

export const mutations = [
  `
  addDrawing (
    input: DrawingInput!
  ): Boolean!
  
  deleteDrawing(
     id: ID!
  ): Boolean
`,
];

const storeUpload = async ({ stream }, title) => {
  const path = `${config.drawingsPath}/${title}.jpg`;
  return new Promise((resolve, reject) =>
    stream
      .on('error', error => {
        if (stream.truncated) fs.unlinkSync(path);
        reject(error);
      })
      .pipe(fs.createWriteStream(path))
      .on('error', error => reject(error))
      .on('finish', () => resolve(true)),
  );
};

const processUpload = async (upload, title) => {
  const { stream } = await upload;
  return storeUpload({ stream }, title);
};

export const resolvers = {
  Mutation: {
    async addDrawing(
      root,
      {
        input: { picture, ...data },
      },
    ) {
      const exist = await Drawing.findOne({
        where: { title: data.title },
      });

      if (exist) {
        throw new Error('Dessin déjà existant en Bdd');
      }

      const isSaved = await processUpload(picture, data.title);

      if (isSaved) {
        await Drawing.create({
          ...data,
        });
        return true;
      }
      return false;
    },

    async deleteDrawing(root, { id }) {
      let drawingToDelete;
      await Drawing.findOne({
        where: { id },
      }).then(
        drawing => {
          drawingToDelete = drawing;
          Drawing.destroy({
            where: { id: drawing.id },
          });
        },
        error => {
          throw new Error(`Echec lors de la suppression en BDD : ${error}`);
        },
      );

      try {
        deleteImage(drawingToDelete.title, ITEM_CONSTANTS.TYPE.DRAWING);
      } catch (err) {
        throw new Error(`Echec de la suppression du fichier image : ${err}`);
      }
      return true;
    },
  },
};
