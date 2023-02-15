import { convertFile } from '../utils/convert-to-csv.js';

export const uploadController = async (request, response) => {
    try {
        const returnFromConvertion = await convertFile();
        response.status(200).json({ message: returnFromConvertion }).end();
    } catch (err) {
        response.status(500).json({ error: err }).end();
    }
};
