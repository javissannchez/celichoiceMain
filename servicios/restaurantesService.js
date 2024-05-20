const MongoLib = require('../lib/mongo');

class RestaurantesService {
  constructor() {
    this.collection = 'restaurantes';
    this.mongoDB = new MongoLib();
  }

  async getRestaurantes() {
    try {
      const restaurantes = await this.mongoDB.getRestaurantes(this.collection);
      return restaurantes || [];
    } catch (error) {
      console.error('Error getting restaurantes:', error);
      throw new Error('Error getting restaurantes');
    }
  }
}

module.exports = RestaurantesService;
