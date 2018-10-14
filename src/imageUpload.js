import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const libraryPath = path.resolve(__dirname, '../photoLibrary');
    cb(null, `${libraryPath}/${req.body.type}`);
  },
  filename: (req, file, cb) => {
    cb(null, req.body.fileName);
  },
});

const upload = multer({ storage, limits: { fileSize: 200000 } });

export default upload;
