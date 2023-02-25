const { request, response, application } = require("express");
const db = require("../db.js");

const UPDATE_TABLE = (request,response) => {
    const Application_id = request.params.id;
    const requestbody = request.body;

    const price = requestbody.price;

    const UPDATE_SQL_QUERY = `UPDATE products SET price =${price} WHERE products_id = ${Application_id}`;

    db.serialize(() => {
        db.get(UPDATE_SQL_QUERY , (error) => {

            if(error){
                response.status(404).json({
                    status : false,
                    error : error,
                    message : "Can't Update the price...."
                })
            }else{
                response.json({
                    status : true,
                    message : `Price was updated on id ${Application_id}`
                })
            }
        })
    })
};

module.exports = UPDATE_TABLE;