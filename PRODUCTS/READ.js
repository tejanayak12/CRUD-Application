
const { response } = require("express");
const { request } = require("http");
const db = require("../db.js");

const Database_QUERY = `SELECT * FROM products`

const getallproducts = (request , response) => {
    db.serialize(() => {
        db.all(Database_QUERY, (error , products) => {
            if (error) {
                response.status(404).send("server error");
                console.error = error
            } else {
                response.json(products)
            }
        })
    })
}
// creating a id query on get.............

const get_product_id = (request,response) =>{
    const products_id = request.params.id;

    const sql_query = `SELECT * FROM products WHERE products_id = ${products_id}`;

    db.serialize(() => {
        db.get(sql_query,(error , rows)=>{
            if (error || !rows) {
                response.status(404).json({
                    status : false,
                    message : `Couldn't find the product id on ${products_id}`
                })
            }else{
                response.json({
                    status : true,
                    data : rows
                })
            }
        })
    })
};

module.exports = {getallproducts,get_product_id}