/*const express = require('express')
const FavoritosService = require('../servicios/favoritosService')

function favoritosAPI(app){
    const router = express.Router()

    app.use('/api/favoritos', router)
    const favoritosService = new FavoritosService()


    router.get('/', async function (req, res, next){
        try{
            const restaurantesFavoritos = await favoritosService.getFavoritos()
            res.status(200).json(
                {
                    data: restaurantesFavoritos,
                    message: 'favoritos recuperados'
                }
            )
        } catch(err){
            console.log(`se produjo un error ${err}`)
        } 
    })

    router.post('/', async function (req, res, next){
        try{
            const {body: favoritos} = req; 

            const idFavoritoAnadido = await favoritos.anadirRestauranteFavorito(favoritos)
            res.status(201).json(
                {
                    data: idFavoritoAnadido,
                    message: 'datos de favoritos recuperados con éxito'
                }
            )
        } catch(err){
            console.log(`se produjo un error ${err}`)
            next(err)
        } 
    })


    router.delete('/:favoritoId', async function (req, res, next){
        try{
            const favoritoId = req.params.favId; // body = req.body; tarea = body  / los : definen un alias

            const idFavoritoBorrado = await carritoService.eliminarRestauranteFavorito(favoritoId)
            res.status(200).json(
                {
                    data: idFavoritoBorrado,
                    message: 'datos de favoritos eliminados con éxito'
                }
            )
        } catch(err){
            console.log(`se produjo un error ${err}`)
            next(err)
        } 
    })
}

module.exports = favoritosAPI*/
/*const { ObjectId } = require('mongodb');
const MongoLib = require('../lib/mongo');

class FavoritosService {
  constructor() {
    this.collection = 'favoritos';
    this.mongoDB = new MongoLib();
  }

  async getFavoritos() {
    try {
      const favoritos = await this.mongoDB.getRestaurantes(this.collection);
      return favoritos || [];
    } catch (error) {
      console.error('Error getting favoritos:', error);
      throw new Error('Error getting favoritos');
    }
  }

  async addFavorito(restaurante) {
    try {
      const id = await this.mongoDB.addRestaurante(this.collection, restaurante);
      return { id, ...restaurante };
    } catch (error) {
      console.error('Error adding favorito:', error);
      throw new Error('Error adding favorito');
    }
  }

  async removeFavorito(id) {
    try {
      const result = await this.mongoDB.deleteRestaurante(this.collection, id);
      return result;
    } catch (error) {
      console.error('Error removing favorito:', error);
      throw new Error('Error removing favorito');
    }
  }
}

module.exports = FavoritosService;
*/
/*
const MongoLib = require('../lib/mongo');

class FavoritosService {
  constructor() {
    this.collection = 'favoritos';
    this.mongoDB = new MongoLib();
  }

  async getFavoritos() {
    try {
      const favoritos = await this.mongoDB.getRestaurantes(this.collection);
      return favoritos || [];
    } catch (error) {
      console.error('Error getting favoritos:', error);
      throw new Error('Error getting favoritos');
    }
  }

  async addFavorito(restaurante) {

    const {_id, ...restauranteSinId } = restaurante

    try {
      const id = await this.mongoDB.addRestaurante(this.collection, restauranteSinId);
      return { id, ...restaurante };
    } catch (error) {
      console.error('Error adding favorito:', error);
      throw new Error('Error adding favorito');
    }
  }

  async removeFavorito(id) {
    try {
      const result = await this.mongoDB.deleteRestaurante(this.collection, id);
      return result;
    } catch (error) {
      console.error('Error removing favorito:', error);
      throw new Error('Error removing favorito');
    }
  }
}

module.exports = FavoritosService;
*/
const MongoLib = require('../lib/mongo');
const { ObjectId } = require('mongodb');

class FavoritosService {
  constructor() {
    this.collection = 'favoritos';
    this.mongoDB = new MongoLib();
  }

  async getFavoritos() {
    try {
      const favoritos = await this.mongoDB.getRestaurantes(this.collection);
      return favoritos || [];
    } catch (error) {
      console.error('Error getting favoritos:', error);
      throw new Error('Error getting favoritos');
    }
  }

  async addFavorito(restaurante) {
    const { _id, ...restauranteSinId } = restaurante;
    try {
      const id = await this.mongoDB.addRestaurante(this.collection, restauranteSinId);
      return { id, ...restaurante };
    } catch (error) {
      console.error('Error adding favorito:', error);
      throw new Error('Error adding favorito');
    }
  }

  async removeFavorito(id) {
    try {
      const result = await this.mongoDB.deleteRestaurante(this.collection, id);
      return result;
    } catch (error) {
      console.error('Error removing favorito:', error);
      throw new Error('Error removing favorito');
    }
  }
}

module.exports = FavoritosService;
