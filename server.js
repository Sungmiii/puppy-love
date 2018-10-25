const express = require('express');
const server = express();
const hbs = require('express-handlebars');
const path = require('path');

server.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));
server.use(express.static('public'));

server.set('view engine', 'hbs');

server.get('/', (req, res) => {
    res.render('index')
})

module.exports = server;

