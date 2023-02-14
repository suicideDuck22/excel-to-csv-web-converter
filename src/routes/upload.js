import Express from 'express';
import { exec } from 'child_process';

import { fileURLToPath } from 'url';
import * as path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Express.Router();

const projectPath = path.join(__dirname, '../../');
const fileToConvertName = 'descontos.xlsx';

const pythonScriptPath = path.join(__dirname, '../utils/convert-to-cvs.py');

export default router.get('/upload', (request, response) => {
    exec(
        `python ${pythonScriptPath} ${projectPath} ${fileToConvertName}`,
        (error, stdout, stderr) => {
            if (error) {
                console.log(`${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`${stderr}`);
                return;
            }
            console.log(`CONVERTIDO`);
            return;
        }
    );

    response.status(200).json({ message: 'convertido' }).end();
});
