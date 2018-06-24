		var express = require('express');
  productRepo = require('../repos/productRepo');
var router = express.Router();

router.get('/', (req, res) => {

   //  var v1 = productRepo.load4ByView(0);
   //  var v2 = productRepo.load4ByView(4);
   //  var v3 = productRepo.load4ByView(8);
   // var s1 = productRepo.load4ByView(0);
   //  var s2 = productRepo.load4ByView(4);
   //  var s3 = productRepo.load4ByView(8);
   //  var n1 = productRepo.load4ByView(0);
   //  var n2 = productRepo.load4ByView(4);
   //  var n3 = productRepo.load4ByView(8);
   //  var vm = {
   //         v1,v2,v3,s1,s2,s3,n1,n2,n3
   //      };
   //      res.render('home/index', vm);


    productRepo.load4ByView(0).then(rows => {
        var vm = {
            categories: rows
        };
        res.render('home/index', vm);
    });
});

router.get('/about', (req, res) => {
    res.render('home/about');
});

module.exports = router;