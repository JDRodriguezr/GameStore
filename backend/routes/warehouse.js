const express = require("express");
const router = express.Router(); //this is the router that will be bringing the correct urls
const WarehouseController = require("../controllers/warehouse"); //instance of the warehouseController


//GET POST PUT DELETE


//https://localHost:3001/api/warehouse/registerWarehouse
router.post("/registerWarehouse", WarehouseController.registerWarehouse);//post sent, this takes the user to the /registerRole site


//https://localHost:3001/api/warehouse/listWarehouse
router.get("/listWarehouse", WarehouseController.listWarehouse);

module.exports = router;