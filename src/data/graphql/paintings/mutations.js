/* eslint-disable spaced-comment */
import fs from 'fs';

import config from '../../../config';
import { Painting } from '../../models/index';
import { deleteImage } from '../../../imageServices';
import ITEM_CONSTANTS from '../../../constants/itemConstants';

export const types = [
  `
  input PaintingInput {
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
  addPainting (
    input: PaintingInput! 
  ): Boolean!
  
  deletePainting(
     id: ID!
  ): Boolean
`,
];

const storeUpload = async ({ stream }, title) => {
  const path = `${config.paintingsPath}/${title}.jpg`;
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
    async addPainting(
      root,
      {
        input: { picture, ...data },
      },
    ) {
      const exist = await Painting.findOne({
        where: { title: data.title },
      });

      if (exist) {
        throw new Error('Peinture déjà existante en Bdd');
      }

      const isSaved = await processUpload(picture, data.title);

      if (isSaved) {
        await Painting.create({
          ...data,
        });
        return true;
      }
      return false;
    },

    async deletePainting(root, { id }) {
      let paintingToDelete;

      await Painting.findOne({
        where: { id },
      }).then(
        painting => {
          paintingToDelete = painting;
          Painting.destroy({
            where: { id: painting.id },
          });
        },
        error => {
          throw new Error(`Echec lors de la suppression en BDD : ${error}`);
        },
      );

      try {
        deleteImage(paintingToDelete.title, ITEM_CONSTANTS.TYPE.PAINTING);
      } catch (err) {
        throw new Error(`Echec de la suppression du fichier image : ${err}`);
      }
      return true;
    },
  },
};
