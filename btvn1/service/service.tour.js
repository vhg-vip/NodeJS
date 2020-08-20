const fs = require('fs');

module.exports = {
    getTour,
    readFile
}

async function readFile(fileName){
    try {
        let data = fs.promises.readFile(fileName, 'utf8');
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function getTour(fileName, id){
    try {
        let data = await fs.promises.readFile(fileName);
        let a = await JSON.parse(data);
        let obj = a.find( item => item.id = id);
        return obj;
    } catch (error) {
        console.log(error);
    }
}

