const service = require('../service/service.tour');
const file = require('../tour.json')
const path = require('path')
const fs = require('fs')


const fileName = path.join(__dirname, '../tour.json')

module.exports = {
    getTour,
    readFile
}

async function readFile(req, res){
    try {
        let obj = await service.readFile(fileName);
        await res.send(obj);
    } catch (error) {
        console.log(err);
    }
}

async function getTour(req, res){
    let id = req.params.id;
    try {
        let obj = await service.getTour(fileName, id);
        await res.send(obj);
    } catch (error) {
        console.log(error);
    }
}


