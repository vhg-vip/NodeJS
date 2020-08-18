const express = require('express');
const pug = require('pug')
const path = require('path')

const app = express();
const port = 3000;

const route_a = require('./routers/a')

app.use('/a', route_a);
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'view'));

app.listen(port, () => {
    console.log('App running');
})