var express = require('express'),
categoryRepo = require('../repos/categoryRepo'),
    config = require('../config/config'),
	producerRepo = require('../repos/producerRepo'),
	donhangRepo = require('../repos/donhangRepo');

	var router = express.Router();

router.get('/index', (req, res) => {
    res.render('admin/index',{ layout: 'admin' });
});

router.get('/categories', (req, res) => {
    res.render('admin/categories',{ layout: 'admin' });
});

router.get('/nhasx', (req, res) => {
    res.render('admin/nhasx',{ layout: 'admin' });
});

router.get('/quanlydonhang', (req, res) => {
	donhangRepo.loadAll().then(rows => {
	var vm = {
            donhang: rows,
			noDonhang: rows.length === 0,
		};
    res.render('admin/quanlydonhang',vm,{ layout: 'admin' });
	});
});

router.get('/quanlysanpham', (req, res) => {
    res.render('admin/quanlysanpham',{ layout: 'admin' });
});

router.get('/quanlysanpham/quanlytheoloaisp', (req, res) => {
	categoryRepo.loadAll().then(rows =>{
		var vm = {
            categories: rows,
			noCategories: rows.length === 0
		};
		res.render('admin/quanlytheoloaisp',vm,{ layout: 'admin' });
	});
});

router.get('/quanlysanpham/quanlytheoloaisp/:catID', (req, res) => {
	var catId = req.params.catID;

    var page = req.query.page;
    if (!page) page = 1;
    if (page < 1) page = 1;

    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;

    var p1 = productRepo.loadPageByCat(catId, offset);
    var p2 = productRepo.countByCat(catId);
	var p3 = categoryRepo.single(catId);
    Promise.all([p1, p2, p3]).then(([rows, count_rows, cats]) => {
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
			categories : cats,
            products: rows,
            noProducts: rows.length === 0,
            page_numbers: numbers
        };
        res.render('admin/byCat', vm,{ layout: 'admin' });
    });
});

router.get('/quanlysanpham/quanlytheonhasx', (req, res) => {
	producerRepo.loadAll().then(rows =>{
		var vm = {
            producers: rows,
			noProducers: rows.length === 0
		};
		res.render('admin/quanlytheonhasx',vm,{ layout: 'admin' });
	});
});


module.exports = router;