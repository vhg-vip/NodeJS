const express = require('express');
const path = require('path');
const pug = require('pug');

const app = express();
const port = 3100;

const route_tour = require('./routers/tour')

app.use('/', route_tour);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'view'));

app.listen(port, () => {
    console.log('App running...haha');
})