const Warehouse = require("../models/warehouse");

const registerWarehouse = async(req, res) =>{

    if(!req.body.name || !req.body.address || !req.body.city)
    return res.status(401).send("Process failed: Incomplete data, please make sure to issue all the information required")

    const existingWarehouse = await Warehouse.findOne({name: req.body.name});//searches for a role with the same name
    if(existingWarehouse) return res.status(401).send("Process failed: Warehouse already exists");

    const warehouse = new Warehouse({ 

        name: req.body.name,
        address: req.body.address,
        city: req.body.city,

    });

    const result = await warehouse.save();
    if(!result) return res.status(401).send("Failed to register");//this is just a confirmation, if something goes wrong then this is displayed
    return res.status(200).send({ warehouse });

};

const listWarehouse = async(req, res) =>{

    const warehouse = await Warehouse.find();
    if(!warehouse) return res.status(401).send("No warehouse registered");
    return res.status(200).send({warehouse});
};

module.exports = {registerWarehouse, listWarehouse};