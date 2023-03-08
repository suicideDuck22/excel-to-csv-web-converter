import { convertFile } from '../utils/convert-to-csv.js';
import { mappedType } from '../utils/mappedTypeToFront.js';

export const uploadController = async (request, response) => {
    try {
        const files = request.uploadedFiles;

        files.forEach(async(file) => await convertFile(file));
        //change the extension of each file from xls to csv
        const filesWithCsvExtension = [];
        files.forEach(file => {
            if(file.includes('.xlsx')){
                filesWithCsvExtension.push(file.replace('xlsx', 'csv'));
            }else{
                filesWithCsvExtension.push(file.replace('xls', 'csv'));
            }
        })
        console.log('cheguei')

        const mappedTypeToFront = mappedType(filesWithCsvExtension);

        response.status(200).send({files: mappedTypeToFront});
    } catch (err) {
        response.status(500).json({ error: err }).end();
    }
};
