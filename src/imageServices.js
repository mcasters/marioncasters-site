import multer from 'multer';
import path from 'path';
import fs from 'fs';

import config from './config';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const libraryPath = path.resolve(__dirname, config.photosPath);
    cb(null, `${libraryPath}/${req.body.type}`);
  },
  filename: (req, file, cb) => {
    cb(null, req.body.fileName);
  },
});

export const upload = multer({ storage, limits: { fileSize: 200000 } });

export const getAllImages = async dirPath => {
  const images = [];
  const files = fs.readdir(dirPath);

  files.forEach(file => {
    images.push(file);
  });
  return images;
};
