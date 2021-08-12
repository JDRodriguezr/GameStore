const express = require("express");
const router = express.Router(); //this is the router that will be bringing the correct urls
const ProductController = require("../controllers/product"); //instance of the warehouseController


//GET POST PUT DELETE


//https://localHost:3001/api/product/registerProduct
router.post("/registerProduct", ProductController.registerProduct);//post sent, this takes the user to the /registerRole site


//https://localHost:3001/api/product/listProduct
router.get("/listProduct", ProductController.listProduct);

module.exports = router;