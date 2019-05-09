import fs from 'fs';
import promisesAll from 'promises-all';

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

export const storeUpload = async ({ stream }, path) =>
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

export const processSculptureUploads = async (pictures, title) => {
  const process = async (element, index) => {
    const { stream } = await element;
    const path = `${config.sculpturesPath}/${title}_${index + 1}.jpg`;
    return storeUpload({ stream }, path);
  };

  return promisesAll.all(pictures.map(process));
};

export const processSingleUpload = async (picture, title, type) => {
  const { stream } = await picture;
  let path;

  if (type === ITEM_CONSTANTS.TYPE.DRAWING) {
    path = `${config.drawingsPath}/${title}.jpg`;
  } else path = `${config.paintingsPath}/${title}.jpg`;

  return storeUpload({ stream }, path);
};

const changeSculptureImageName = async (oldTitle, newTitle) => {
  const path = `${config.sculpturesPath}`;
  let i = 1;
  const promises = [];
  let res = true;

  while (i < 5) {
    try {
      promises.push(
        fs.rename(
          `${path}/${oldTitle}_${i}.jpg`,
          `${path}/${newTitle}_${i}.jpg`,
        ),
      );
      i++;
    } catch (e) {
      res = false;
    }
  }
  await Promise.all(promises);
  return res;
};

export const changeImageName = async (oldTitle, newTitle, type) => {
  let path;
  let res = true;

  if (type === ITEM_CONSTANTS.TYPE.SCULPTURE)
    await changeSculptureImageName(oldTitle, newTitle);
  else if (type === ITEM_CONSTANTS.TYPE.DRAWING) {
    path = `${config.drawingsPath}`;
  } else if (type === ITEM_CONSTANTS.TYPE.PAINTING) {
    path = `${config.paintingsPath}`;
  }
  try {
    await fs.rename(`${path}/${oldTitle}.jpg`, `${path}/${newTitle}.jpg`);
  } catch (e) {
    res = false;
  }
  return res;
};

const deleteImage = async file => {
  fs.unlink(`${file}`, err => {
    return !err;
  });
};

export const deleteImages = async (itemTitle, itemType) => {
  const library = config.libraryPath;
  const files = [];
  let i;

  switch (itemType) {
    case ITEM_CONSTANTS.TYPE.SCULPTURE:
      for (i = 1; i < 5; i++) {
        files.push(
          `${library}/${ITEM_CONSTANTS.SCULPTURE_FOLDER}/${itemTitle}_${i}.jpg`,
        );
      }
      break;
    case ITEM_CONSTANTS.TYPE.PAINTING:
      files.push(
        `${library}/${ITEM_CONSTANTS.PAINTING_FOLDER}/${itemTitle}.jpg`,
      );
      break;
    case ITEM_CONSTANTS.TYPE.DRAWING:
      files.push(
        `${library}/${ITEM_CONSTANTS.DRAWING_FOLDER}/${itemTitle}.jpg`,
      );
      break;
    default:
      return false;
  }

  const isDeleted = await files.every(deleteImage);
  return isDeleted;
};
