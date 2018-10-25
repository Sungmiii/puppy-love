const express = require('express');
const server = express();
const hbs = require('express-handlebars');
const path = require('path');

const routes = require ('./routes')


server.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));
server.use(express.static('public'));

server.set('view engine', 'hbs');

<<<<<<< HEAD
server.get('/', (req, res) => {
    const content = {
        title: "PUPPY LOVE | HOME"
    }
    res.render('index', content)
})
=======
server.use(express.static('public'))

server.use(express.urlencoded({extended: false}))
>>>>>>> eb04d6d061c98ee3604f630b3eb8c19c139dc074

server.use('/',routes)
module.exports = server;

