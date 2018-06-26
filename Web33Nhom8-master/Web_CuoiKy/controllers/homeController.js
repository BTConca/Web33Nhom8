<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 94c4bb9... Revert "Merge branch 'master' into admin"

		var express = require('express');
  productRepo = require('../repos/productRepo');
=======
		var express = require('express');
>>>>>>> parent of 932b89b... Admin
<<<<<<< HEAD
=======
var express = require('express');
>>>>>>> parent of c7effc1... Merge branch 'master' into admin
=======
=======
>>>>>>> parent of 94c4bb9... Revert "Merge branch 'master' into admin"

		var express = require('express');
  productRepo = require('../repos/productRepo');
>>>>>>> parent of 7a57e92... Revert "Admin"

=======
		var express = require('express');
  productRepo = require('../repos/productRepo');
>>>>>>> parent of 69d39c3... Merge pull request #1 from BTConca/admin
var router = express.Router();

router.get('/', (req, res) => {


    productRepo.load4ByView(0).then(v1 => {
    	 productRepo.load4ByView(4).then(v2 => {
    	 	productRepo.load4ByView(8).then(v3 => {
    	 		productRepo.load4BySell(0).then(s1 => {
    	 			productRepo.load4BySell(4).then(s2 => {
    	 				productRepo.load4BySell(8).then(s3 => {
    	 					productRepo.load4ByNew(0).then(n1 => {
    	 						productRepo.load4ByNew(4).then(n2 => {
    	 							productRepo.load4ByNew(8).then(n3 => {

        var vm = {
            v1,v2,v3,s1,s2,s3,n1,n2,n3
        };
            res.render('home/index', vm);
        });});});});});});});});
    });

});

router.get('/about', (req, res) => {
    res.render('home/about');
});

module.exports = router;