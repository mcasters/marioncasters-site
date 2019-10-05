import fs from 'fs';
import promisesAll from 'promises-all';
import sharp from 'sharp';

import config from './config';
import ITEM_CONSTANTS from './constants/itemConstants';
import CONTENT_CONSTANTS from './constants/contentConstants';

export const getAllImages = async dirPath => {
  const images = [];
  const files = fs.readdir(dirPath);

  files.forEach(file => {
    images.push(file);
  });
  return images;
};

const getItemPaths = (title, type) => {
  const file = `${title}.jpg`;
  if (type === ITEM_CONSTANTS.TYPE.SCULPTURE)
    return [
      `${config.sculpturesPath}/${file}`,
      `${config.sculpturesMDPath}/${file}`,
      `${config.sculpturesSMPath}/${file}`,
    ];

  if (type === ITEM_CONSTANTS.TYPE.DRAWING)
    return [
      `${config.drawingsPath}/${file}`,
      `${config.drawingsMDPath}/${file}`,
      `${config.drawingsSMPath}/${file}`,
    ];

  if (type === ITEM_CONSTANTS.TYPE.PAINTING)
    return [
      `${config.paintingsPath}/${file}`,
      `${config.paintingsMDPath}/${file}`,
      `${config.paintingsSMPath}/${file}`,
    ];
  return null;
};

export const storeImage = async ({ stream }, path) =>
  new Promise((resolve, reject) =>
    stream
      .pipe(fs.createWriteStream(path))
      .on('error', error => {
        if (stream.truncated) fs.unlinkSync(path);
        reject(error);
      })
      .on('finish', () => resolve(true)),
  );

const storeImageWithResize = async ({ stream }, path, px) => {
  const outStream = fs.createWriteStream(path);
  const transformer = sharp().resize({
    width: px,
    height: px,
    fit: 'inside',
  });

  return new Promise((resolve, reject) =>
    stream
      .pipe(transformer)
      .pipe(outStream)
      .on('error', error => {
        if (stream.truncated) fs.unlinkSync(path);
        reject(error);
      })
      .on('finish', () => resolve(true)),
  );
};

const storeItemImage = async ({ stream }, type, title) => {
  const paths = getItemPaths(title, type);
  return Promise.all([
    storeImage({ stream }, paths[0]),
    storeImageWithResize({ stream }, paths[1], ITEM_CONSTANTS.MD_PX),
    storeImageWithResize({ stream }, paths[2], ITEM_CONSTANTS.SM_PX),
  ]);
};

const processSculptureImagesUpload = async (pictures, title) => {
  const process = async (element, index) => {
    const { stream } = await element;
    const fileName = `${title}_${index + 1}`;
    return storeItemImage({ stream }, ITEM_CONSTANTS.TYPE.SCULPTURE, fileName);
  };

  return promisesAll.all(pictures.map(process));
};

export const processImageUpload = async (pictures, title, type) => {
  if (type === ITEM_CONSTANTS.TYPE.SCULPTURE) {
    return processSculptureImagesUpload(pictures, title);
  }

  // eslint-disable-next-line no-unused-vars
  const { stream, mimetype } = await pictures[0];

  if (type === CONTENT_CONSTANTS.TYPE) {
    // const extension = mimetype.split('/')[1];
    const path = `${config.miscellaneousPath}/${title}.jpg`;
    return storeImage({ stream }, path);
  }
  return storeItemImage({ stream }, type, title);
};

const renameItemImage = async (oldTitle, newTitle, type) => {
  const oldPaths = getItemPaths(oldTitle, type);
  const newPaths = getItemPaths(newTitle, type);

  return Promise.all(
    oldPaths.map((oldPath, index) => {
      if (fs.existsSync(oldPath)) {
        fs.rename(oldPath, newPaths[index], err => {
          return !err;
        });
      }
      return false;
    }),
  );
};

export const renameItemImages = async (oldTitle, newTitle, type) => {
  if (type === ITEM_CONSTANTS.TYPE.SCULPTURE) {
    let i = 1;
    const promises = [];

    while (i < 5) {
      const oldFileName = `${oldTitle}_${i}`;
      const newFileName = `${newTitle}_${i}`;
      promises.push(renameItemImage(oldFileName, newFileName, type));
      i++;
    }
    return Promise.all(promises);
  }
  return renameItemImage(oldTitle, newTitle, type);
};

const deleteImage = async file => {
  fs.unlink(`${file}`, err => {
    return !err;
  });
};

export const deleteItemImages = async (title, type) => {
  let paths;

  if (type === ITEM_CONSTANTS.TYPE.SCULPTURE) {
    let i;
    paths = [];
    for (i = 1; i < 5; i++) {
      Array.prototype.push.apply(paths, getItemPaths(`${title}_${i}`, type));
    }
  } else {
    paths = getItemPaths(title, type);
  }

  const isDeleted = await paths.every(deleteImage);
  return isDeleted;
};
