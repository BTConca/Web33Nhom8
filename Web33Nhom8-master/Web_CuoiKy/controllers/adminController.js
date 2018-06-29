var express = require('express'),
categoryRepo = require('../repos/categoryRepo'),
    config = require('../config/config'),
	producerRepo = require('../repos/producerRepo'),
	orderRepo =require('../repos/orderRepo'),
  productRepo = require('../repos/productRepo'),
      moment = require('moment');

	var router = express.Router();












//  if(req.session.isLogged===true)
   
//     if(req.session.curUser.f_Permission == 1)
//     {


// Chỗ này hàm chạy gì thì điền vào đây là hàm xác thực admin


    

//     }
//     else
//     { var err=true;
//         var erro="Bạn không có quyền admin!!";
//         vm={
//             err,
//             erro,
//         };

// res.render('account/login',vm);
//     }
//  }
//  else
//  {
//  var err=true;
//  var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
//         vm={
//             err,
//             erro,
//         };
// res.render('account/login',vm);
//  }













router.get('/index', (req, res) => {



 if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {

    res.render('admin/index',{ layout: 'admin' });



    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});























router.get('/nhasx', (req, res) => {


 if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {
    res.render('admin/nhasx',{ layout: 'admin' });


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }
});












router.get('/quanlydonhang', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


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


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});
















router.get('/quanlydonhang/add',(req,res)=>
{
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


  var vm = {
    showResult: false,
    layout: 'admin'
  };
  res.render('admin/adddonhang', vm);


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});

router.post('/quanlydonhang/add', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {
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


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});
















router.get('/quanlydonhang/edit', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


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


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});










router.post('/quanlydonhang/edit', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


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


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});







router.get('/quanlydonhang/delete', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {
    var vm = {
        id: req.query.id,
        layout: 'admin'
    };
    res.render('admin/deletedonhang', vm);


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});














router.post('/quanlydonhang/delete', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


    orderRepo.delete(req.body.OderID).then(value => {
        res.redirect('/admin/quanlydonhang');
    });


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});












router.get('/quanlysanpham', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


    res.render('admin/quanlysanpham', { layout: 'admin' });



    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }
});










router.get('/quanlysanpham/quanlytheoloaisp', (req, res) => {
	 if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


    categoryRepo.loadAll().then(rows =>{
		var vm = {
             categories: rows,
			 noCategories: rows.length === 0,
			 layout: 'admin'
		};
    res.render('admin/quanlytheoloaisp',vm);
	});


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});












router.get('/quanlysanpham/quanlytheoloaisp/:catID', (req, res) => {
	 if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


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


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});












router.get('/quanlysanpham/nhasx/:producerid', (req, res) => {
 if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {

// Hàm chạy ssao ông viết trong này trên dưới là bảo mật admin

    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});













router.get('/addproducts',(req,res)=>
{ if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


  var vm = {
    CatID : req.query.id,
    showResult: false,
    layout: 'admin'
  };
  res.render('admin/addproducts', vm);


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});






router.post('/addproducts', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


    productRepo.add(req.body).then(value => {
      var vm = {
        showResult : true,
        layout : 'admin'
      }
        res.render('admin/addproducts',vm);
    });


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});







router.get('/deleteproduct', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


    var vm = {
        id: req.query.id,
        CatID: req.query.CatID,
			layout: 'admin'
    };
    res.render('admin/deleteproduct', vm);


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});










router.post('/deleteproduct', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


    productRepo.delete(req.body.id).then(value => {
        res.redirect('/admin/quanlysanpham/quanlytheoloaisp');
    });


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});









router.get('/addcategorie',(req,res)=>
{
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


  var vm = {
    showResult: false,
    layout: 'admin'
  };
  res.render('admin/addcategorie', vm);


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});









router.post('/addcategorie', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


  categoryRepo.add(req.body).then(value => {
      var vm = {
        showResult : true,
        layout : 'admin'
      }
        res.render('admin/addcategorie',vm);
    });


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});








router.get('/deleteCate', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


    var vm = {
        id: req.query.id,
			layout: 'admin'
    };
    res.render('admin/deletecategorie', vm);


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});








router.post('/deleteCate', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


    categoryRepo.delete(req.body.CatID).then(value => {
        res.redirect('/admin/quanlysanpham/quanlytheoloaisp');
    });


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});









router.get('/addproducers', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


    var vm = {
        showResult :false,
        layout : 'admin'
    };
    res.render('admin/addproducers',vm);


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});










router.post('/addproducers', (req, res) => {
     if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


    producerRepo.add(req.body).then(value => {
      var vm = {
        showResult : true,
        layout : 'admin'
      }
        res.render('admin/addproducers',vm);
    });


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }


});









router.get('/deleteproducers', (req, res) => {
 if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


    var vm = {
        id: req.query.id,
			layout: 'admin'
    };
    res.render('admin/deleteproducers', vm);


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});









router.post('/deleteproducers', (req, res) => {
 if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


  producerRepo.delete(req.body.ProducerID).then(value => {
      res.redirect('/admin/quanlysanpham/quanlytheonhasx');
  });


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});








router.get('/quanlysanpham/quanlytheonhasx', (req, res) => {
	 if(req.session.isLogged===true)
 {
   
    if(req.session.curUser.f_Permission == 1)
    {


    producerRepo.loadAll().then(rows =>{
		var vm = {
            producers: rows,
			noProducers: rows.length === 0,
			layout: 'admin'
		};
		res.render('admin/quanlytheonhasx',vm);
	});


    }
    else
    { var err=true;
        var erro="Bạn không có quyền admin!!";
        vm={
            err,
            erro,
        };

res.render('account/login',vm);
    }
 }
 else
 {
 var err=true;
 var erro="Bạn chưa đăng nhập, vui lòng đăng nhập để xác thực admin!!";
        vm={
            err,
            erro,
        };
res.render('account/login',vm);
 }

});



module.exports = router;
