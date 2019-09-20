import fs from 'fs';
import promisesAll from 'promises-all';
import sharp from 'sharp';

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

export const storeWithResizeImage = async (
  { stream },
  basePath,
  title,
  size,
) => {
  let px;
  if (size === ITEM_CONSTANTS.MD_SIZE) px = ITEM_CONSTANTS.MD_PX;
  if (size === ITEM_CONSTANTS.SM_SIZE) px = ITEM_CONSTANTS.SM_PX;

  if (px === undefined) return new Promise(reject => reject('Taille invalide'));

  const path = `${basePath}/${size}/${title}.jpg`;
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

export const storeItemImage = async ({ stream }, basePath, title) => {
  const path = `${basePath}/${title}.jpg`;
  return Promise.all([
    storeImage({ stream }, path),
    storeWithResizeImage({ stream }, basePath, title, ITEM_CONSTANTS.MD_SIZE),
    storeWithResizeImage({ stream }, basePath, title, ITEM_CONSTANTS.SM_SIZE),
  ]);
};

export const processSculptureImagesUpload = async (pictures, title) => {
  const process = async (element, index) => {
    const { stream } = await element;
    const path = `${config.sculpturesPath}/${title}_${index + 1}.jpg`;
    return storeImage({ stream }, path);
  };

  return promisesAll.all(pictures.map(process));
};

export const processImageUpload = async (picture, title, type) => {
  const { stream, mimetype } = await picture;

  if (type === ITEM_CONSTANTS.TYPE.DRAWING) {
    const basePath = `${config.drawingsPath}`;
    return storeItemImage({ stream }, basePath, title);
  }

  if (type === ITEM_CONSTANTS.TYPE.PAINTING) {
    const basePath = `${config.paintingsPath}`;
    return storeItemImage({ stream }, basePath, title);
  }

  let path;
  if (mimetype === 'image/png')
    path = `${config.miscellaneousPath}/${title}.png`;
  if (mimetype === 'image/jpeg')
    path = `${config.miscellaneousPath}/${title}.jpg`;
  return storeImage({ stream }, path);
};

const changeSculptureImageName = async (oldTitle, newTitle) => {
  let i = 1;
  const promises = [];
  const oldPaths = [];
  let res = true;

  while (i < 5) {
    const oldPath = `${config.sculpturesPath}/${oldTitle}_${i}.jpg`;
    if (fs.existsSync(oldPath)) oldPaths.push(oldPath);
    i++;
  }

  if (oldPaths.length !== 4) return false;

  oldPaths.forEach((oldPath, index) => {
    promises.push(
      fs.rename(
        oldPath,
        `${config.sculpturesPath}/${newTitle}_${index + 1}.jpg`,
        e => {
          if (e) res = false;
        },
      ),
    );
  });
  await Promise.all(promises);
  return res;
};

export const changeImageName = async (oldTitle, newTitle, type) => {
  let path;
  let res = true;

  if (type === ITEM_CONSTANTS.TYPE.SCULPTURE) {
    res = await changeSculptureImageName(oldTitle, newTitle);
    return res;
  }

  if (type === ITEM_CONSTANTS.TYPE.DRAWING) {
    path = `${config.drawingsPath}`;
  } else if (type === ITEM_CONSTANTS.TYPE.PAINTING) {
    path = `${config.paintingsPath}`;
  }
  const oldPath = `${path}/${oldTitle}.jpg`;
  if (fs.existsSync(oldPath)) {
    await fs.rename(oldPath, `${path}/${newTitle}.jpg`, e => {
      if (e) res = false;
    });
  } else {
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
