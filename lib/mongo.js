/*const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const USER = 'fjsanchezgu';
const PASSWORD = 'pwDb';
const DB_NAME = 'restaurantes';
const DB_HOST = 'cluster0.ja3yksl.mongodb.net';

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/?appName=Cluster0`;

class MongoLib {
  constructor() {
    this.veces = 0;
    this.client = null;
    this.db = null;
  }

  async connect() {
    this.veces++;
    console.log(`Connect invocado ${this.veces} veces`);

    if (this.db) {
      console.log('Reutilizando conexión existente');
      return this.db;
    } else {
      try {
        this.client = await MongoClient.connect(MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        this.db = this.client.db(DB_NAME);
        console.log('Conexión a la BD exitosa');
        return this.db;
      } catch (e) {
        console.log('Error en conexión a BBDD', e);
        throw e;
      }
    }
  }

  async getRestaurantes(collection) {
    try {
      const db = await this.connect();
      const result = await db.collection(collection).find().toArray();
      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async addRestaurante(collection, data) {
    try {
      const db = await this.connect();
      const result = await db.collection(collection).insertOne(data);
      return result.insertedId;
    } catch (e) {
      console.error('Error al insertar', e);
      throw e;
    }
  }

  async deleteRestaurante(collection, id) {
    try {
      const db = await this.connect();
      const result = await db.collection(collection).deleteOne({ _id: new ObjectId(id) });
      return result;
    } catch (e) {
      console.error('Error al borrar', e);
      throw e;
    }
  }
}

module.exports = MongoLib;*/
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const USER = 'fjsanchezgu';
const PASSWORD = 'pwDb';
const DB_NAME = 'restaurantes';
const DB_HOST = 'cluster0.ja3yksl.mongodb.net';

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/?appName=Cluster0`;

class MongoLib {
  constructor() {
    this.veces = 0;
    this.client = null;
    this.db = null;
  }

  async connect() {
    this.veces++;
    console.log(`Connect invocado ${this.veces} veces`);

    if (this.db) {
      console.log('Reutilizando conexión existente');
      return this.db;
    } else {
      try {
        this.client = await MongoClient.connect(MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        this.db = this.client.db(DB_NAME);
        console.log('Conexión a la BD exitosa');
        return this.db;
      } catch (e) {
        console.log('Error en conexión a BBDD', e);
        throw e;
      }
    }
  }

  async getRestaurantes(collection) {
    try {
      const db = await this.connect();
      const result = await db.collection(collection).find().toArray();
      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async addRestaurante(collection, data) {
    try {
      const db = await this.connect();
      const result = await db.collection(collection).insertOne(data);
      return result.insertedId;
    } catch (e) {
      console.error('Error al insertar', e);
      throw e;
    }
  }

  async deleteRestaurante(collection, id) {
    try {
      const db = await this.connect();
      const result = await db.collection(collection).deleteOne({ id: parseInt(id)});
      return result;
    } catch (e) {
      console.error('Error al borrar', e);
      throw e;
    }
  }
}

module.exports = MongoLib;
