var express = require('express'),
    productRepo = require('../repos/productRepo'),
    categoryRepo = require('../repos/categoryRepo');
var router = express.Router();

router.get('/', (req, res) => {
            res.render('search/index');
});


router.get('/:name&:catid&:producerid&:minprice&:maxprice', (req, res) => {
// 	
    var page = req.query.page;
      if (!page) page = 1;
    if (page < 1) page = 1;
    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
      console.log(`offset : ${offset} page: ${page}`);
	var p1 = productRepo.search(req.params.name,req.params.catid,req.params.producerid,req.params.minprice,req.params.maxprice,offset);
    var p2 = productRepo.countBySearch(req.params.name,req.params.catid,req.params.producerid,req.params.minprice,req.params.maxprice);
    console.log(p1);
     console.log(p2);
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
   console.log(vm);
        res.render('search/index', vm);
    });

});





module.exports = router;