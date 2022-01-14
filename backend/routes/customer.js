const router = require('Express').Router();
const req = require('express/lib/request');
let Customer = require('../models/customer.model')

router.route('/').get((req, res)=>{
    Customer.find()
    .then(customers => res.json(customers))
    .catch(err=> res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) =>{
    const custAddress = req.body.custAddress;
    const emailId = req.body.emailId;
    const gender = req.body.gender;
    const city = req.body.city;

    const newCustomer = new Customer({
        custAddress,
        emailId,
        gender,
        city
    });

    newCustomer.save()
    .then(() => res.json('Customer Added!'))
    .catch(err => res.status(400).json('Error: '+ err));

})

module.exports = router;