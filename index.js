const bodyparser = require("body-parser");
const { response } = require("express");
const express = require("express");
const { request } = require("http");
const sqlite3 = require('sqlite3');

const {getallproducts , get_product_id} = require("./PRODUCTS/READ.js");
const get_new_application = require("./PRODUCTS/CREATE.js");
const update_application = require("./PRODUCTS/UPDATE.js");
const deleteproducts = require("./PRODUCTS/DELETE.js");

const app = express();

app.use(bodyparser.json());

const port = 5000;

app.get(`/products` , getallproducts);

app.get(`/products/:id` , get_product_id);

app.post(`/new-products`, get_new_application);
  
app.put(`/products/:id`, update_application); 
  
app.delete("/products/:id" ,deleteproducts);

app.get("/",(request , response) =>{
    response.json({
        Status : true,
        Message : "Hi There Welcome to Server.....Developed by : TEJA NAYAK",
        server : "products server was running.......",
        products : "want to See the products https://new-application-53bq.onrender.com/products",
        products : "here products_ID is https://new-application-53bq.onrender.com/products/urs id as 1 to 5",
        message : "Thank you please visit again........",
        Author : "TEJA NAYAK......"

    })
})

app.listen(port ,  () => {
    console.log("sever is running...............")
});