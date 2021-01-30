var assert = require('assert');
const client = require('../Data/Connection');
const CRUD = require('../Data/Queries/CRUD');

client.connect();

describe('Controller Functions',function(){

    it('should select without error',function (done){

        const rows = CRUD.Select('product',['id','name']);

        rows.then((obj) => {
            console.log(obj);
            done();
        }).catch((err) => done(err));

    });

    it('should select and join without error', function(done){

        const rows = CRUD.SelectJoin("product",["id as productId","name as productName","price as Price"],"category",["name as categoryName"],"categoryId","id").then(function(obj,err){
                console.log(obj);
                done();
        }).catch((err) => done(err));
    });

    it('should Update without error',function(done){

        const result = CRUD.Update("product",["name = 'abcd'"],"ID",4);

        result.then(function(obj){
            console.log(obj);
            done();
        }).catch((err) =>{
            done(err);
        })

    });

    it('should Delete without error',function(done){

        const result = CRUD.Delete("product",`id = 3`);

        result.then(function(obj){
            console.log(obj);
            done();
        }).catch((err) => done(err));
    });
});

