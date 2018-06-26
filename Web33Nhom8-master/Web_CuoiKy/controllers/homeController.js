<<<<<<< HEAD
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

=======
		var express = require('express');
  productRepo = require('../repos/productRepo');
>>>>>>> parent of 69d39c3... Merge pull request #1 from BTConca/admin
var router = express.Router();

router.get('/', (req, res) => {
    res.render('home/index');
});

router.get('/about', (req, res) => {
    res.render('home/about');
});

module.exports = router;