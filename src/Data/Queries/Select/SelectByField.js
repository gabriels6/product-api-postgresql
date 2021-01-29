const client = require('../../Connection');

module.exports = {
    async SelectByField(table,fields,queryField,queryValue){

        const {rows} = await client.query(`SELECT ${fields.join(",")} FROM ${table} WHERE ${queryField} = ${queryValue}`);

        return rows;
    },
}