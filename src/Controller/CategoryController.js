const CRUD = require('../Data/Queries/CRUD');

module.exports = {
    async GetCategories(request,response){
        try{
            const rows = await CRUD.Select("category",["id","name"]);

            return response.json(rows);
        }catch(error){
            console.log(error);
            return response.status(400).end();
        }
    },
    async GetCategoryByID(request,response){
        try{
            const {id} = request.params;

            const rows = await CRUD.SelectByField("category",["id","name"],"id",id);
            
            return response.json(rows);
        }catch(error){
            console.log(error);
            return response.status(400).end();
        }
    }
}