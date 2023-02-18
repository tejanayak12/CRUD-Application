const bodyparser = require("body-parser");
const { response } = require("express");
const express = require("express");
const { request } = require("http");
const sqlite3 = require('sqlite3');

const getproducts = require("./PRODUCTS/READ.js");

const app = express();

app.use(bodyparser.json());

const port = 5000;

app.get(`/products` , getproducts);

app.post(`/products`, (request, response) => {
    response.json({ status: true })
  });
  
  app.put(`/products/:productId`, (request, response) => {
    response.json({ status: true })
  });
  
  app.delete("/products/:products", (request, response) => {
    response.json({ status: true })
  });


app.listen(port ,  () => {
    console.log("sever is running...............")
});