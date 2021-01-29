const client = require('../../Connection');

module.exports = {
    async Select(table,fields){

        const {rows} = await client.query(`SELECT ${fields.join(",")} FROM ${table}`);

        return rows;
    },
}