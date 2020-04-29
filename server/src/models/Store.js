const mongoose = require('mongoose');

const coordSchema = new mongoose.Schema({
    coords: {
        x: Number,
        y: Number
    }
})




const locationSchema = new mongoose.Schema({
    name: String,
    wifiMacAddress: String,
    imgUrl: String,
    category: String,
    locations: [coordSchema]
})

mongoose.model('Store', locationSchema);