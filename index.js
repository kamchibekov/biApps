const express = require('express');
const Liquid = require('liquidjs');


const app = express();
const engine = Liquid({
    extname: '.html'
});

app.engine('liquid', engine.express());
app.set('views', 'public');
app.set('view engine', 'liquid');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});


var port = process.env.PORT || 8080;
var server = app.listen(port, () => console.log('Server started listening'));