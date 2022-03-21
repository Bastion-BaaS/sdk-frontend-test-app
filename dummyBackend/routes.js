const express = require('express');
const dbRouter = express.Router();
const dbController = require('./dbController');

dbRouter.get('/collections', dbController.getCollections);

dbRouter.get(`/collections/:name`, dbController.getCollection);
dbRouter.post(`/collections`, dbController.createCollection);
dbRouter.delete(`/collections/:name`, dbController.deleteCollection);

dbRouter.get(`/collections/:name/:id`, dbController.getItem);
dbRouter.post(`/collections/:name`, dbController.createItem);
dbRouter.put(`/collections/:name/:id`, dbController.updateItem);
dbRouter.delete(`/collections/:name/:id`, dbController.deleteItem);

module.exports = dbRouter;
