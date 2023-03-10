import multer from "multer"
import {fileURLToPath} from 'url'
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let storage = multer.diskStorage({
    destination: (request, response, callback) => {
        callback(null, path.join(`${__dirname}/../uploads`));
    },
    filename: (request, file, callback) => { 
        callback(null, Date.now() + '-' +file.originalname);
    }
})

let upload = multer({storage: storage}).array('file');

export const uploadFiles = (request, response, next) => {
  try{
    upload(request, response, (err) => {
      if(err instanceof multer.MulterError){
          return response.status(500).json(err);
      }else if(err){
          return response.status(500).json(err);
      }
      const files = request.files;
      const newFileNames = [];
      files.forEach(file => newFileNames.push(file.filename));

      request.uploadedFiles = newFileNames;

      next();

    })
  }catch(err){
    return response.status(500).json(err);
  }
}