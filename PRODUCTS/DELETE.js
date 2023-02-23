const db = require("../db.js");

const deleteproducts = (request , response) => {
    const products_id = request.params.id;

    const sql_query = `DELETE from products WHERE products_id = "${products_id}"`;

    db.serialize(() => {
        db.get(sql_query , (error) => {
            if(error){
                response.status(404).json({
                    status : false,
                    message : `coudnt delete the product_id 0n ${products_id}`,
                    error : error
                })
            }else {
                response.json({
                    status : true,
                    message : `product was deleted on id ${products_id}`
                })
            }
        })
    })
};

module.exports = deleteproducts;