var assert = require('assert');
const client = require('../Data/Connection');
const CRUD = require('../Data/Queries/CRUD');

client.connect();

describe('Controller Functions',function(){

    describe('Product Controller', function(){
        it('should select without error',function (done){

            const promise = CRUD.Select('product',['id','name']);
    
            promise.then((obj) => {
                console.log(obj);
                done();
            }).catch((err) => done(err));
    
        });
    
        it('should select and join without error', function(done){
    
            const promise = CRUD.SelectJoin("product",["id as productId","name as productName","price as Price"],"category",["name as categoryName"],"categoryId","id").then(function(obj,err){
                    console.log(obj);
                    done();
            }).catch((err) => done(err));
        });
    
        it('should Update without error',function(done){
    
            const promise = CRUD.Update("product",["name = 'abcd'"],"ID",4);
    
            promise.then(function(obj){
                console.log(obj);
                done();
            }).catch((err) =>{
                done(err);
            })
    
        });
    
        it('should Delete without error',function(done){
    
            const promise = CRUD.Delete("product",`id = 3`);
    
            promise.then(function(obj){
                console.log(obj);
                done();
            }).catch((err) => done(err));
        });
    });

    describe('Category Controller',function(done){
        it('Should return a list with categories, without error',function(){

            const promise =  CRUD.Select("category",["id","name"]);

            promise.then((obj) =>{
                console.log(obj);
                done(obj);
            }).catch((err) => done(err))
        });
        it('Should return a category mentioned by the id',function(){
            const promise =  CRUD.SelectByField("category",["id","name"],"id","4");

            promise.then((obj) => {
                console.log(obj);
                done(obj);
            }).catch((err) => done(err));
        });
    });
    
});

