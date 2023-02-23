
const { request, response } = require("express");
const db = require("../db.js");

// creating an insert query...............

const INSERT_new_application = (request , response) => {
    const application_data = request.body;
    const {name , price , discription} =application_data;

    if(!name){
        return erromessage(response,"PLease provide name of an product")
    }

    if(!price){
        return erromessage(response,"PLease provide price of an product")
    }

    if(!discription){
        return erromessage(response,"please provide theory data of an product")
    };

    const INSERT_SQL_QUERY =`INSERT INTO products (
        name,
        price,
        discription
    ) VALUES (
        "${name}",
        "${price}",
        "${discription}"
    )`;

    db.serialize(() => {
        db.exec(INSERT_SQL_QUERY,(error) =>{
            if(error){
                response.status(404).json({
                    status : false,
                    error : error
                })
            } else {
                response.json({
                    status : true,
                    message : "NEW PRODUCT APPLICATION ADDED"
                })
            }
        })
    })
};


module.exports = INSERT_new_application;

const erromessage = (response , erromessage) => {
    return response.status(404).json({
        status : false,
        error : erromessage
    });
}
  