const express = require('express');
const server = express();
const hbs = require('express-handlebars');
const path = require('path');

const routes = require('./routes')


server.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));
server.use(express.static('public'));
server.use(express.urlencoded({ extended: false }))
server.set('view engine', 'hbs');

server.use(express.static('public'))
server.use('/',routes)

module.exports = server;

