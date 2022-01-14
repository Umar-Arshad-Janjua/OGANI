const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    custAddress: {type: String, required: true},    
    emailId: {type: String, required: true},   
    gender: {type: String, required: true},        
    city: {type: String, required: true}
})

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;