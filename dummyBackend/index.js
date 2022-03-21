const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = 3005;

app.set('json spaces', 2); // just for prettier json formatting

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => console.log(`App running on port ${PORT}.`));