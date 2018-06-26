var express = require('express'),
    productRepo = require('../repos/productRepo'),
    categoryRepo = require('../repos/categoryRepo');
var router = express.Router();

router.get('/', (req, res) => {
            res.render('search/index');
});





module.exports = router;