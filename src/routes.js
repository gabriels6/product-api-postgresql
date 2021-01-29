const { Router } = require('express');
const ProductController = require('./Controller/ProductController');


const routes = Router();

routes.get('/',ProductController.GetProducts);
routes.get("/:id",ProductController.GetProductById);
routes.post('/',ProductController.AddProduct);
routes.put('/',ProductController.UpdateProduct);
routes.delete('/:id',ProductController.DeleteProduct);


module.exports = routes;
