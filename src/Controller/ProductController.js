const CRUD = require('../Data/Queries/CRUD');


module.exports = {
    async GetProducts(request,response){
        try{
            const rows = await CRUD.SelectJoin("product",["id as productId","name as productName","price as Price"],"category",["name as categoryName"],"categoryId","id");
    

            return response.json(rows);
        }catch(error){
            console.log(error);
            return response.status(400).end();
        }
        
    },
    async GetProductById(request,response){
        try{
            const {id} = request.params


        const rows = await CRUD.SelectJoin("product",["id as productId","name as Product","price as Price"],"category",["name as Category"],"categoryId","id",`WHERE product.id = ${id}`);


        return response.json(rows);
        }catch(error){
            console.log(error);
            return response.status(400).end();
        } 
    },  
    async AddProduct(request,response){
        try{
            var {productName,categoryId,Price} = request.body;


            const result = await CRUD.Insert("product",["name","categoryId","price"],["'"+productName+"'","'"+categoryId+"'","'"+Price+"'"]);


            return response.json(result);
        }catch(error){
            console.log(error);
            return response.status(400).end();
        }
    },
    async UpdateProduct(request,response){
        try{
            var {productId,productName,productPrice} = request.query;

            fields = [];

            Name = null;
            Price = null;

            if(productName != null){
                Name = "name = '" +productName+ "'";
                fields.push(Name);
            }
            
            if(productPrice != null){
                Price = "price = '"+productPrice+"'";
                fields.push(Price);
            }

            const result = await CRUD.Update("product",fields,"ID",productId);


            return response.json(result);
        }catch(error){
            console.log(error);
            return response.status(400).end();
        }
            
    },
    async DeleteProduct(request,response){
        try{
            var {id} = request.params;

            const result = await CRUD.Delete("product",`id = ${id}`);

    
            return response.json(result);
        }catch(error){
            console.log(error);
            return response.status(400).end();
        }
        
    }
   
}
