<<<<<<< HEAD
<<<<<<< HEAD

		var express = require('express');
  productRepo = require('../repos/productRepo');
=======
		var express = require('express');
>>>>>>> parent of 932b89b... Admin
=======
var express = require('express');
>>>>>>> parent of c7effc1... Merge branch 'master' into admin

var router = express.Router();

router.get('/', (req, res) => {
    res.render('home/index');
});

router.get('/about', (req, res) => {
    res.render('home/about');
});

module.exports = router;