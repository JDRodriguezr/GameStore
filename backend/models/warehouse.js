const mongoose = require("mongoose");

const warehouseSchema = new mongoose.Schema({ 

    name: String,
    address: String,
    city: String,

    date: {type: Date, default: Date.now},
    dbStatus: {type: Boolean, default: true}
    
});
const warehouse = mongoose.model("warehouse", warehouseSchema);

module.exports = warehouse;