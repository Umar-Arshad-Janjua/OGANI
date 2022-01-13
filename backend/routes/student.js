const router = require('Express').Router();
const req = require('express/lib/request');
let Student = require('../models/student.model')

router.route('/').get((req, res)=>{
    Student.find()
    .then(students => res.json(students))
    .catch(err=> res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) =>{
    const custAddress = req.body.custAddress;
    const emailId = req.body.emailId;
    const gender = req.body.gender;
    const city = req.body.city;

    const newStudent = new Student({
        custAddress,
        emailId,
        gender,
        city
    });

    newStudent.save()
    .then(() => res.json('Student Added!'))
    .catch(err => res.status(400).json('Error: '+ err));

})

module.exports = router;