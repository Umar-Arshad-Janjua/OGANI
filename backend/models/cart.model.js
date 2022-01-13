const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    name: {type : String, required : true},
    price: {type : Number, required : true},
    img:
    {
        data: Buffer,
        contentType: String
    }
    
},{
    timestamps : true
});


const Cart = mongoose.model('CartItems',CartSchema );


module.exports  = Cart;