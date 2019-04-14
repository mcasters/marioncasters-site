import fs from 'fs';
import promisesAll from 'promises-all';

import { Sculpture } from '../../models/index';
import { deleteImages } from '../../../imageServices';
import ITEM_CONSTANTS from '../../../constants/itemConstants';
import config from '../../../config';

export const types = [
  `
  input SculptureInput {
    pictures: [Upload]!
    title: String!
    date: String!
    technique: String!
    description: String
    length: Int!
    height: Int!
    width: Int!
  }
  `,
];

export const mutations = [
  `
  addSculpture (
    input: SculptureInput!
  ): Boolean
  
  deleteSculpture(
     id: ID!
  ): Boolean
`,
];

const storeUpload = async ({ stream }, title, index) => {
  const path = `${config.sculpturesPath}/${title}_${index + 1}.jpg`;
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

const processUploads = async (pictures, title) => {
  const process = async (element, index) => {
    const { stream } = await element;
    return storeUpload({ stream }, title, index);
  };
  const { resolve, reject } = await promisesAll.all(pictures.map(process));

  if (reject.length) throw new Error("Problème à l'écriture du fichier");

  return resolve;
};

export const resolvers = {
  Mutation: {
    async addSculpture(
      root,
      {
        input: { pictures, ...data },
      },
    ) {
      const { title } = data;
      const exist = await Sculpture.findOne({
        where: { title },
      });

      if (exist) {
        throw new Error('Sculpture déjà existante en Bdd');
      }

      const isUploaded = await processUploads(pictures, title);

      if (isUploaded) {
        await Sculpture.create({
          ...data,
        });
        return true;
      }
      return false;
    },

    async deleteSculpture(root, { id }) {
      const sculpture = await Sculpture.findOne({
        where: { id },
      });

      if (!sculpture) throw new Error('Sculpture introuvable en BDD');

      const isDeleted = await deleteImages(
        sculpture.title,
        ITEM_CONSTANTS.TYPE.SCULPTURE,
      );

      if (!isDeleted) throw new Error(`Echec de la suppression des images`);
      else {
        Sculpture.destroy({
          where: { id: sculpture.id },
        })
          .then(res => res)
          .catch(() => {
            throw new Error('Echec de la suppression en Bdd');
          });
      }
      return false;
    },
  },
};
