const allCollections = require('./dummyData');

const getCollections = (req, res, next) => {
  res.status(200).json(allCollections);
};

const getCollection = (req, res, next) => {
  const collection = req.params.name;
  const result = allCollections.find(obj => obj.name === collection);
  res.status(200).json(result);
};

const createCollection = (req, res, next) => {
  const collectionName = req.body.name;
  const newCollection = {
    name: collectionName,
    data: [],
  };
  allCollections.push(newCollection);
  res.status(201).json(newCollection);
};

const deleteCollection = (req, res, next) => {
  const collectionName = req.params.name;
  const idxToRemove = allCollections.findIndex(obj => obj.name === collectionName);
  allCollections.splice(idxToRemove, 1);
  res.sendStatus(200);
};

const getItem = (req, res, next) => {
  const collectionName = req.params.name;
  const id = Number(req.params.id);

  const collection = allCollections.find(obj => obj.name === collectionName);
  const item = collection.data.find(obj => obj.id === id);

  res.status(200).json(item);
};

const createItem = (req, res, next) => {
  const newItem = req.body;
  const collectionName = req.params.name;

  const collection = allCollections.find(obj => obj.name === collectionName);
  collection.data.push(newItem);

  res.status(201).json(newItem);
};

const updateItem = (req, res, next) => {
  const updatedItem = req.body;
  const collectionName = req.params.name;
  const id = Number(req.params.id);

  const collection = allCollections.find(obj => obj.name === collectionName);
  const itemIdx = collection.data.findIndex(obj => obj.id === id);

  collection.data[itemIdx] = updatedItem;

  res.status(200).json(updatedItem);
};

const deleteItem = (req, res, next) => {
  const collectionName = req.params.name;
  const id = Number(req.params.id);

  const collection = allCollections.find(obj => obj.name === collectionName);
  const idxToRemove = collection.data.findIndex(obj => obj.id === id);

  collection.data.splice(idxToRemove, 1);

  res.sendStatus(200);
};

module.exports = {
  getCollections,
  getCollection,
  createCollection,
  deleteCollection,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}
