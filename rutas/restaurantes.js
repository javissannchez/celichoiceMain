const express = require('express');
const RestaurantesService = require('../servicios/restaurantesService');

function restaurantesAPI(app) {
  const router = express.Router();
  app.use('/api/restaurantes', router);
  const restaurantesService = new RestaurantesService();

  router.get('/', async (req, res) => {
    try {
      const restaurantes = await restaurantesService.getRestaurantes();
      res.status(200).json({
        data: restaurantes,
        message: 'Restaurantes recuperados con éxito',
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
}

module.exports = restaurantesAPI;

/*
    // Añadir a favoritos
    router.post('/:id/favoritos', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await restaurantesService.addFavorito(id);
            res.status(201).json({
                data: result,
                message: 'Restaurante añadido a favoritos'
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Eliminar de favoritos
    router.delete('/:id/favoritos', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await restaurantesService.removeFavorito(id);
            res.status(200).json({
                data: result,
                message: 'Restaurante eliminado de favoritos'
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Listar favoritos
    router.get('/favoritos', async (req, res) => {
        try {
            const favoritos = await restaurantesService.getFavoritos();
            res.status(200).json({
                data: favoritos,
                message: 'Favoritos recuperados con éxito'
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
}
module.exports = restaurantesAPI;
*/
