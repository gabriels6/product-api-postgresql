const client = require('../../Connection');

module.exports = {
    async Insert(table,tablerows,values){

        const result = await client.query(`INSERT INTO ${table} (${tablerows.join(",")}) VALUES (${values.join(",")})`);

        return result;
    },
}