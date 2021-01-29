const { Client } = require('pg');
require('dotenv').config({path: __dirname + '/../.env'});

const client = new Client({
    connectionString:process.env.conn_string,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = client;

