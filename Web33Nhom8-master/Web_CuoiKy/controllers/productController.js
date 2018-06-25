var express = require('express'),
    productRepo = require('../repos/productRepo'),
    config = require('../config/config');
var router = express.Router();

router.get('/detail/:proId', (req, res) => {
    var proId = req.params.proId;
    productRepo.single(proId).then(products => {
        if (products.length > 0) {
            
            productRepo.load4ByCat(products[0].CatID,0).then(c1 => {

                productRepo.load4ByCat(products[0].CatID,4).then(c2 => {
                     productRepo.load4ByProducer(products[0].ProducerID,0).then(p1 => {
                         productRepo.load4ByProducer(products[0].ProducerID,4).then(p2 => {
         
            var vm = {
                product: products[0],
                c1,c2,p1,p2,
            };
            res.render('product/detail', vm);
        });});});});
        } else {
            res.end('NO PRODUCT');
        }
    });
});


module.exports = router;