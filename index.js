const express = require('express');
const cors = require('cors');
const restaurantesAPI = require('./rutas/restaurantes');
const favoritosAPI = require('./rutas/favoritos');
const MongoLib = require('./lib/mongo');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mongoLibInstance = new MongoLib();

const path = require('path');
/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'angular', 'index.html'));
});*/
restaurantesAPI(app, mongoLibInstance);
favoritosAPI(app, mongoLibInstance);

app.use(express.static('public'));

const server = app.listen('8080', () => {
  console.log(`servidor escuchando en ${server.address().port}`);
});
