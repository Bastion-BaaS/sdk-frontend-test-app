// return object with all the methods
const databaseModule = (sendRequest) => {
  const getCollections = () => {
    return sendRequest('/collections', 'GET');
  };

  const getCollection = (id) => {
    return sendRequest(`/collections/${id}`, 'GET');
  };

  const createCollection = (name) => {
    return sendRequest(`/collections`, 'POST', { name })
  };

  const deleteCollection = (id) => {
    return sendRequest(`/collections/${id}`, 'DELETE');
  };

  const getItem = (name, id) => {
    return sendRequest(`/collections/${name}/${id}`, 'GET');
  };

  const createItem = (name, data) => {
    return sendRequest(`/collections/${name}`, 'POST', data);
  };

  const updateItem = (name, id, data) => {
    return sendRequest(`/collections/${name}/${id}`, 'PUT', data);
  };

  const deleteItem = (name, id) => {
    return sendRequest(`/collections/${name}/${id}`, 'DELETE');
  };

  return {
    getCollections,
    getCollection,
    createCollection,
    deleteCollection,
    getItem,
    createItem,
    updateItem,
    deleteItem,
  };
};

export default databaseModule