const { Router } = require('express');
const CategoryController = require('./Controller/CategoryController');
const ProductController = require('./Controller/ProductController');


const routes = Router();

routes.get('/product/',ProductController.GetProducts);
routes.get("/product/:id",ProductController.GetProductById);
routes.post('/product/',ProductController.AddProduct);
routes.put('/product/',ProductController.UpdateProduct);
routes.delete('/product/:id/:token',ProductController.DeleteProduct);

routes.get('/category/',CategoryController.GetCategories);
routes.get('/category/:id',CategoryController.GetCategoryByID);


module.exports = routes;
