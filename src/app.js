import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routerUpload from './routes/upload.js';

export const app = Express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use('/files', routerUpload);
