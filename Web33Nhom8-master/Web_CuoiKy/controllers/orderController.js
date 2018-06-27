var express = require('express'),
    orderRepo = require('../repos/orderRepo'),
    cartRepo = require('../repos/cartRepo'),
     productRepo = require('../repos/productRepo'),
    config = require('../config/config'),
      moment = require('moment');
var router = express.Router();

router.get('/', (req, res) => {
	var UserID =   req.session.curUser.f_ID;
	orderRepo.getByUserID(UserID).then(rows=>
	{
		var orders = [];
		var n = rows.length;
		for(var i=0;i<n;i++)
		{
			orderRepo.getProductByOrderID(rows[i].OrderID).then(pros =>
			{
				orders.push({
					products: pros,
					total: pros.length,});
				});
		};
		var vm =
		{
			orders
		};
		res.render('order/index', vm);
	});
});
router.post('/add', (req, res) => {
	var total= cartRepo.getAmountOfItems(req.session.cart);
 	var items = req.session.cart;
 	var userID =  req.session.curUser.f_ID;
 	var date = new Date().toLocaleDateString();
 	var OrderDate = moment(date, 'YYYY/MM/DD')
            .format('YYYY-MM-DDTHH:mm');
      orderRepo.addOrder(OrderDate,userID,total).then(rows =>{
			orderRepo.getLastOrderID().then(value =>
			{

				var OrderID = value[0].OrderID;
				
				for(var i =0;i< items.length;i++)
				{
							
					orderRepo.addOrderDetail(OrderID,items[i].product.ProID,items[i].quantity,items[i].product.Price,items[i].amount).then(
						ro =>
						{

						});	
					productRepo.sell(items[i].product.ProID,items[i].quantity).then(se =>   {}	);
				};


 			for(var i =0;i< req.session.cart.length;)
				{
				cartRepo.remove(req.session.cart,req.session.cart[i].product.ProID);

			}
					
				
			})
			res.redirect('/order');
      });
	
});








module.exports = router;