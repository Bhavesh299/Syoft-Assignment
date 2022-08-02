const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        required: true
    },
    product_description: {
        type: String,
        required: true
    },
  
},
{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Product', productSchema);


