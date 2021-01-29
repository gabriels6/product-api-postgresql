# Product API

# What you should expect from this API

This API allows for select, insert, update and delete products from a database. This was made for the usage in simple store projects, that need product to be filled with.

# Commands

## Select

Route:

In local Machine:

method: GET - localhost:3333/




Returns a list of products, each product contains:

1. productid - The primary Key, as Integer with Auto-Increment
2. productname - The name of the product, as String
3. price - The price of the product
4. categoryname - The Category which this product is in

#### Example:

method:GET
action: localhost:3333/

returns:

[
    {
        "productid": 7,
        "productname": "Smartphone",
        "price": 749.99,
        "categoryname": "Eletronics"
    },
    {
        "productid": 8,
        "productname": "Laptop",
        "price": 3799.99,
        "categoryname": "Eletronics"
    }
]

## Select By Id

Route:

In local Machine:

method: GET - localhost:3333/<product_id>



Returns the product of the id. each product contains:

1. productid - The primary Key, as Integer with Auto-Increment
2. productname - The name of the product, as String
3. price - The price of the product
4. categoryname - The Category which this product is in

#### Example

method:GET
action: localhost:3333/8

returns:

{
    "productid": 8,
    "productname": "Laptop",
    "price": 3799.99,
    "categoryname": "Eletronics"
}


## Insert

Route:

In local Machine:

method: POST - localhost:3333/

Body required for request:
JSON - 
{
    "productName":"name_of_product",
    "categoryId":id for the category - integer,
    "Price": the price of the product - float
}

#### Example:

method: POST
action: localhost:3333/

body:
{
    "productName":"Book",
    "categoryId":1,
    "Price":29.99
}

## Update

Route:

In local machine:

method: PUT - localhost:3333/?productId=<product_id>&productPrice=<productPrice>

#### Example:

method: PUT
action: localhost:3333?productId=8&productPrice=3799.99

## Delete (Restricted)

Route:

In local machine:

method: DELETE - localhost:/<product_id>/<token>

#### Example:

method: DELETE 
action: localhost:/9/TOKEN_VALUE*

*TOKEN_VALUE: Restricted to people authorized by the Creator

# Status

## Code: 200 - OK

The Command was executed right and returned the expected result

## Code: 400 - Bad Request

The Input placed on the command is not the expected one for the API.

