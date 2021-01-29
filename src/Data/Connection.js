const { Client } = require('pg');
require('dotenv').config({path: __dirname + '/../.env'});

const client = new Client({
    connectionString:process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = client;

