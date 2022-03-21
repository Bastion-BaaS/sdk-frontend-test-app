import axios from 'axios';
// import authModule from './authenticationModule';
import databaseModule from './databaseModule';

const initialize = (hostUrl, apiKey) => {
  // generic authorized sendRequest function that other modules can use
  // - all requests will use the apiKey provided in the initialize function
  const sendRequest = async (path, method, data) => {
    return axios({
      method,
      data,
      url: `${hostUrl}${path}`,
      headers: {
        'Authorization': `Basic ${apiKey}`,
        'Content-Type': 'application/json'
      }
    })
    .then(result => result);
  }

  // const auth = authModule(sendRequest);
  const db = databaseModule(sendRequest);

  // return object with all of the modules
  return {
    // auth,
    db
  };
};

export default initialize;