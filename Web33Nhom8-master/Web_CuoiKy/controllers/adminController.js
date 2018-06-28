var express = require('express'),
categoryRepo = require('../repos/categoryRepo'),
    config = require('../config/config'),
	producerRepo = require('../repos/producerRepo'),
	orderRepo =require('../repos/orderRepo'),
      moment = require('moment');

	var router = express.Router();

router.get('/index', (req, res) => {
    res.render('admin/index',{ layout: 'admin' });
});

router.get('/nhasx', (req, res) => {
    res.render('admin/nhasx',{ layout: 'admin' });
});

router.get('/quanlydonhang', (req, res) => {
	var page = req.query.page;
    if (!page) page = 1;
    if (page < 1) page = 1;

    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
  var p1 = orderRepo.loadAll();
	var p2 = orderRepo.loadPage(offset);
  Promise.all([p2, p1]).then(([rows,total]) =>
	{
		var total = total.length;
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
    var dates = [];
        for(i = 1; i <=rows.length; i ++)
        {
          var date = moment(rows[i-1].OrderDate).format('DD-MM-YYYY');
            dates.push(
              {
                OrderID : rows[i-1].OrderID,
                UserID : rows[i-1].UserID,
                OrderDate : date,
                Adress: rows[i-1].Adress,
                Total: rows[i-1].Total,
                Status: rows[i-1].Status
              });
        }

		var vm =
		{
			orders : dates,
			noOders : rows.length === 0,
			layout: 'admin',
			page_numbers: numbers
		};
    res.render('admin/quanlydonhang',vm);
	});
});

router.get('/quanlydonhang/add',(req,res)=>
{
  var vm = {
    showResult: false,
    layout: 'admin'
  };
  res.render('admin/adddonhang', vm);
});

router.post('/quanlydonhang/add', (req, res) => {
var dob = moment(req.body.OrderDate, 'DD-MM-YYYY').format('YYYY-MM-DD HH:mm');
  var dh = {
    OrderDate : dob,
    UserID : req.body.UserID,
    Total :req.body.Total,
    Adress :req.body.Adress,
    Status :req.body.Status
  };
    orderRepo.add(dh).then(value => {
        // console.log(value);
        var vm = {
            showResult: true,
            layout: 'admin'
        };
        res.render('admin/adddonhang', vm);
    });
});

router.get('/quanlydonhang/edit', (req, res) => {
    orderRepo.single(req.query.id).then(rows => {
       var dt = moment(rows[0].OrderDate).format('DD-MM-YYYY');

        date=
          {
            OrderID : rows[0].OrderID,
            UserID : rows[0].UserID,
            OrderDate : dt,
            Adress: rows[0].Adress,
            Total: rows[0].Total,
            Status: rows[0].Status
          };
        var vm = {
            oder: date,
            layout: 'admin'
        };
        res.render('admin/editdonhang', vm);
    });
});

router.post('/quanlydonhang/edit', (req, res) => {
  var dob = moment(req.body.OrderDate, 'DD-MM-YYYY').format('YYYY-MM-DD HH:mm');
  var dh = {
    OrderID : req.body.OrderID,
    OrderDate : dob,
    UserID : req.body.UserID,
    Total :req.body.Total,
    Adress :req.body.Adress,
    Status :req.body.Status
  };
    orderRepo.update(dh).then(value => {
        res.redirect('/admin/quanlydonhang');
    });
});


router.get('/quanlysanpham', (req, res) => {
    res.render('admin/quanlysanpham', { layout: 'admin' });
});

router.get('/quanlysanpham/quanlytheoloaisp', (req, res) => {
	categoryRepo.loadAll().then(rows =>{
		var vm = {
             categories: rows,
			 noCategories: rows.length === 0,
			 layout: 'admin'
		};
    res.render('admin/quanlytheoloaisp',vm);
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
            page_numbers: numbers,
			layout: 'admin'
        };
		res.render('admin/byCat',vm);
    });
});

router.get('/quanlysanpham/quanlytheonhasx', (req, res) => {
	producerRepo.loadAll().then(rows =>{
		var vm = {
            producers: rows,
			noProducers: rows.length === 0,
			layout: 'admin'
		};
		res.render('admin/quanlytheonhasx',vm);
	});
});


module.exports = router;
