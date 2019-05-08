import fs from 'fs';
import promisesAll from 'promises-all';

import { Sculpture, Painting, Drawing } from '../../models/index';
import { deleteImages } from '../../../imageServices';
import ITEM_CONSTANTS from '../../../constants/itemConstants';
import config from '../../../config';
import getAuthenticatedUser from '../common/checkAuth';

export const types = [
  `
  input ItemInput {
    pictures: [Upload]!
    type: String!
    title: String!
    date: String!
    technique: String!
    description: String
    length: Int
    height: Int!
    width: Int!
  }
  `,
];

export const mutations = [
  `
  addItem (
    input: ItemInput!
  ): Item!
  
  deleteItem(
     id: ID!
     type: String!
  ): Boolean
`,
];

const storeUpload = async ({ stream }, path) =>
  new Promise((resolve, reject) =>
    stream
      .on('error', error => {
        if (stream.truncated) fs.unlinkSync(path);
        reject(error);
      })
      .pipe(fs.createWriteStream(path))
      .on('error', err => reject(err))
      .on('finish', () => resolve(true)),
  );

const processSculptureUploads = async (pictures, title) => {
  const process = async (element, index) => {
    const { stream } = await element;
    const path = `${config.sculpturesPath}/${title}_${index + 1}.jpg`;
    return storeUpload({ stream }, path);
  };

  return promisesAll.all(pictures.map(process));
};

const processSingleUpload = async (picture, title, type) => {
  const { stream } = await picture;
  let path;

  if (type === ITEM_CONSTANTS.TYPE.DRAWING) {
    path = `${config.drawingsPath}/${title}.jpg`;
  } else path = `${config.paintingsPath}/${title}.jpg`;

  return storeUpload({ stream }, path);
};

const getItemByName = async (title, type) => {
  if (type === ITEM_CONSTANTS.TYPE.PAINTING)
    return Painting.findOne({
      where: { title },
    });
  if (type === ITEM_CONSTANTS.TYPE.DRAWING)
    return Drawing.findOne({
      where: { title },
    });
  return Sculpture.findOne({
    where: { title },
  });
};

const getItemById = async (id, type) => {
  if (type === ITEM_CONSTANTS.TYPE.PAINTING)
    return Painting.findOne({
      where: { id },
    });
  if (type === ITEM_CONSTANTS.TYPE.DRAWING)
    return Drawing.findOne({
      where: { id },
    });
  return Sculpture.findOne({
    where: { id },
  });
};

const createItem = async (data, type) => {
  if (type === ITEM_CONSTANTS.TYPE.PAINTING) return Painting.create(data);
  if (type === ITEM_CONSTANTS.TYPE.DRAWING) return Drawing.create(data);
  return Sculpture.create(data);
};

const deleteItem = async (id, type) => {
  if (type === ITEM_CONSTANTS.TYPE.PAINTING)
    return Painting.destroy({
      where: { id },
    });
  if (type === ITEM_CONSTANTS.TYPE.DRAWING)
    return Drawing.destroy({
      where: { id },
    });
  return Sculpture.destroy({
    where: { id },
  });
};

export const resolvers = {
  Mutation: {
    async addItem(
      root,
      {
        input: { pictures, type, ...data },
      },
      { req },
    ) {
      const isAdmin = await getAuthenticatedUser(req);

      if (!isAdmin) throw new Error("Erreur d'authentification");

      const { title } = data;

      const item = await getItemByName(title, type);

      if (item) throw new Error('Item déjà existant en Bdd');

      let res;
      if (type === ITEM_CONSTANTS.TYPE.SCULPTURE)
        res = await processSculptureUploads(pictures, title);
      else res = await processSingleUpload(pictures[0], title, type);

      if (!res) throw new Error("Erreur à l'écriture des fichiers");

      const newOne = await createItem(data, type);

      if (!newOne)
        throw new Error("Erreur à l'enregistrement en base de donnée");
      return newOne;
    },

    async deleteItem(root, { id, type }, { req }) {
      const isAdmin = await getAuthenticatedUser(req);

      if (!isAdmin) throw new Error("Erreur d'authentification");

      const item = await getItemById(id, type);

      if (!item) throw new Error('Item absent en BDD');

      const isDeleted = await deleteImages(item.title, type);

      if (!isDeleted) throw new Error(`Echec de la suppression des images`);
      else {
        deleteItem(id, type)
          .then(res => res)
          .catch(() => {
            throw new Error('Echec de la suppression en Bdd');
          });
      }
      return false;
    },
  },
};
