import path from 'path';
import fs from 'fs';

import config from './config';
import ITEM_CONSTANTS from './constants/itemConstants';

export const getAllImages = async dirPath => {
  const images = [];
  const files = fs.readdir(dirPath);

  files.forEach(file => {
    images.push(file);
  });
  return images;
};

export const deleteImage = async (itemTitle, itemType) => {
  const rootPath = path.resolve(__dirname, config.photosPath);
  const fileNames = [];
  let itemsPath;
  let i;

  switch (itemType) {
    case ITEM_CONSTANTS.TYPE.SCULPTURE:
      for (i = 1; i < 5; i++) {
        fileNames.push(`${itemTitle}_${i}.jpg`);
      }
      itemsPath = `${rootPath}/${ITEM_CONSTANTS.TYPE.SCULPTURE}`;
      break;
    case ITEM_CONSTANTS.TYPE.PAINTING:
      fileNames.push(`${itemTitle}.jpg`);
      itemsPath = `${rootPath}/${ITEM_CONSTANTS.TYPE.PAINTING}`;
      break;
    case ITEM_CONSTANTS.TYPE.DRAWING:
      fileNames.push(`${itemTitle}.jpg`);
      itemsPath = `${rootPath}/${ITEM_CONSTANTS.TYPE.DRAWING}`;
      break;
    default:
      throw new Error("Erreur dans le type de l'item manquant");
  }
  fileNames.forEach(fileName => {
    const filePath = `${itemsPath}/${fileName}`;
    fs.unlink(`${filePath}`, err => {
      if (err)
        throw new Error(`Erreur lors de la suppression du fichier : ${err}`);
    });
  });
};
