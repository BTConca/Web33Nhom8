var express = require('express'),
    productRepo = require('../repos/productRepo'),
    categoryRepo = require('../repos/categoryRepo');
var router = express.Router();

router.get('/', (req, res) => {
            res.render('search/index');
});

router.get('/product', (req, res) => {
    
   var name = req.query.name;
 if (!name) name = "%";
    var catid = req.query.catid;
      if (!catid) catid = -1;
    var producerid = req.query.producerid;
      if (!producerid) producerid = -1;
    var minprice = req.query.minprice;
      if (!minprice) minprice = 0;
    var maxprice = req.query.maxprice;
         if (!maxprice) maxprice = 100000000;

    var page = req.query.page;
      if (!page) page = 1;
    if (page < 1) page = 1;
    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
     
    var p1 = productRepo.search(name,catid,producerid,minprice,maxprice,offset);
    var p2 = productRepo.countBySearch(name,catid,producerid,minprice,maxprice);


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

        res.render('search/index', vm);
    });

});






module.exports = router;