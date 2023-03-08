import Express from 'express';
import { uploadController } from '../controllers/convert.js';
import {uploadFiles} from '../middleware/uploadFiles.js';

const router = Express.Router();

export default router.post('/upload', uploadFiles, uploadController);
