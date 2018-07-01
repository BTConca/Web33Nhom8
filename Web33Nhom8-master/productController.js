var express = require('express'),
    productRepo = require('../repos/productRepo'),
    config = require('../config/config');
var router = express.Router();

router.get('/detail/:proId', (req, res) => {
    var proId = req.params.proId;
    productRepo.single(proId).then(products => {
        productRepo.view(proId).then(value =>{}
            );

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



router.get('/byProducer/:producerId', (req, res) => {
    var producerId = req.params.producerId;
    var page = req.query.page;
    if (!page) page = 1;
    if (page < 1) page = 1;
  
    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;

    var p1 = productRepo.loadPageByProducer(producerId, offset);
    var p2 = productRepo.countByProducer(producerId);
    Promise.all([p1, p2]).then(([rows, count_rows]) => {
        var total = count_rows[0].total;
        var nPages = total / config.PRODUCTS_PER_PAGE;
        if (total % config.PRODUCTS_PER_PAGE > 0)
            nPages++;

        var numbers = [];
        for (i = 1; i <= nPages; i++) {
            numbers.push({
                value: i,
                isCurrentPage: i === +page
            });
        }

        var vm = {
            nPages,
            products: rows,
            noProducts: rows.length === 0,
            page_numbers: numbers
        };
     
        res.render('product/byProducer', vm);
    });
});





router.get('/byCat/:catId', (req, res) => {
    var catId = req.params.catId;
    var page = req.query.page;
    if (!page) page = 1;
    if (page < 1) page = 1;
  
    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;

    var p1 = productRepo.loadPageByCat(catId, offset);
    var p2 = productRepo.countByCat(catId);
    Promise.all([p1, p2]).then(([rows, count_rows]) => {
        var total = count_rows[0].total;
        var nPages = total / config.PRODUCTS_PER_PAGE;
        if (total % config.PRODUCTS_PER_PAGE > 0)
            nPages++;

        var numbers = [];
        for (i = 1; i <= nPages; i++) {
            numbers.push({
                value: i,
                isCurrentPage: i === +page
            });
        }

        var vm = {
            
            nPages,
            products: rows,
            noProducts: rows.length === 0,
            page_numbers: numbers
        };
     
        res.render('product/byCat', vm);
    });
});












module.exports = router;