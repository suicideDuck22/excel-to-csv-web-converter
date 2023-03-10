export const mappedType = (files) => {
    const mappedTypeToFront = [];
    
    for(let i = 0; i < files.length; i++){
        const originalFileName = files[i];
        const [,name] = files[i].split('-');
    
        mappedTypeToFront.push({
            name: name,
            originalFileName: originalFileName,
        });
    }

    return mappedTypeToFront;
}
