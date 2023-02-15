import Express from 'express';
import { uploadController } from '../controllers/convert.js';

const router = Express.Router();

export default router.get('/upload', uploadController);
