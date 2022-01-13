const router = require('express').Router();



let CartP = require('../models/cart.model.js');
// var multer = require('multer');
router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const price = req.body.price;
    const img = req.body.img;
    
    console.log(req.body.price)

    const newCartData = new CartP({ 
        name,
        price,
        img
    });

    newCartData.save()
    .then(()=> res.json('CartItems Added!'))
    .catch(err => res.status(400).json('Error: '+ err));
})

router.route('/').get((req, res)=>{
    CartP.find()
    .then(products => res.json(products))
    .catch(err=> res.status(400).json('Error: '+ err));
})

router.route('/:id').delete((req, res) => {
    CartP.findByIdAndDelete(req.params.id)
      .then(() => res.json('Cart Item  deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  


module.exports = router;