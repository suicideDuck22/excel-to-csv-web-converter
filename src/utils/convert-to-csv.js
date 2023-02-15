import { exec } from 'child_process';
import util from 'util';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const asyncExec = util.promisify(exec);

const fileToConvertName = 'descontos.xlsx';
const projectPath = path.join(__dirname, '../../');
const pythonScriptPath = path.join(__dirname, '/convert-to-cvs.py');

const convertedFileFullPath = `${projectPath}/src/converted/${fileToConvertName}`;
export const convertFile = async () => {
    return new Promise((resolve, reject) => {
        asyncExec(
            `python ${pythonScriptPath} ${projectPath} ${fileToConvertName}`,
            (error, stdout, stderr) => {
                if (error) {
                    return reject(`${error.message}`);
                }
                if (stderr) {
                    return reject(`${stderr}`);
                }
                console.log(stdout);
                return resolve(stdout);
            }
        );
    });
};
