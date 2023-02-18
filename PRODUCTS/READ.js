
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
module.exports = getallproducts;