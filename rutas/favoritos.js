/*const express = require('express');
const FavoritosService = require('../servicios/favoritosService');

function favoritosAPI(app) {
  const router = express.Router();
  app.use('/api/favoritos', router);
  const favoritosService = new FavoritosService();

  router.get('/', async function (req, res, next) {
    try {
      const restaurantesFavoritos = await favoritosService.getFavoritos();
      res.status(200).json({
        data: restaurantesFavoritos,
        message: 'Favoritos recuperados',
      });
    } catch (err) {
      console.log(`Se produjo un error ${err}`);
      res.status(500).json({
        message: 'Error recuperando favoritos',
      });
    }
  });

  router.post('/', async function (req, res, next) {
    try {
      const { restaurante } = req.body;
      const addedFavorito = await favoritosService.addFavorito(restaurante);
      res.status(201).json({
        data: addedFavorito,
        message: 'Favorito añadido',
      });
    } catch (err) {
      console.log(`Se produjo un error ${err}`);
      res.status(500).json({
        message: 'Error añadiendo favorito',
      });
    }
  });

  router.delete('/:id', async function (req, res, next) {
    try {
      const { id } = req.params;
      const removedFavorito = await favoritosService.removeFavorito(id);
      res.status(200).json({
        data: removedFavorito,
        message: 'Favorito eliminado',
      });
    } catch (err) {
      console.log(`Se produjo un error ${err}`);
      res.status(500).json({
        message: 'Error eliminando favorito',
      });
    }
  });
}

module.exports = favoritosAPI;*/
const express = require('express');
const FavoritosService = require('../servicios/favoritosService');

function favoritosAPI(app) {
    const router = express.Router();
    app.use('/api/favoritos', router);
    const favoritosService = new FavoritosService();

    router.get('/', async function (req, res, next) {
        try {
            const restaurantesFavoritos = await favoritosService.getFavoritos();
            res.status(200).json({
                data: restaurantesFavoritos,
                message: 'favoritos recuperados'
            });
        } catch (err) {
            console.log(`se produjo un error ${err}`);
            next(err);
        }
    });

    router.post('/', async function (req, res, next) {
        try {
            const { body: restaurante } = req;
            const idFavoritoAnadido = await favoritosService.addFavorito(restaurante);
            res.status(201).json({
                data: idFavoritoAnadido,
                message: 'favorito añadido con éxito'
            });
        } catch (err) {
            console.log(`se produjo un error ${err}`);
            next(err);
        }
    });

    router.delete('/:favoritoId', async function (req, res, next) {
        try {
            const { favoritoId } = req.params;
            const idFavoritoBorrado = await favoritosService.removeFavorito(favoritoId);
            res.status(200).json({
                data: idFavoritoBorrado,
                message: 'favorito eliminado con éxito'
            });
        } catch (err) {
            console.log(`se produjo un error ${err}`);
            next(err);
        }
    });
}

module.exports = favoritosAPI;
