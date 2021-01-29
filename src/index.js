const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const client = require('./Data/Connection');

client.connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3333);
