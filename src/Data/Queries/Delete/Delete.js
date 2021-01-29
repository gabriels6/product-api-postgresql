const { response } = require('express');
const client = require('../../Connection');

module.exports = {
    async Delete(table,condition){

        const result = await client.query(`DELETE FROM ${table} WHERE ${condition};`);

        return result;
    }
}