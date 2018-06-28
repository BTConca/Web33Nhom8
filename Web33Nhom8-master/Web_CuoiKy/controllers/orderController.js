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
            var Adress = req.body.adress;
            var er="Thất bại!!";
            var erList=[];
            var check = 0;
            for(var i =0;i< items.length;i++)
				{
					if(items[i].product.Quantity<items[i].quantity)
					{
						var item= {
							proname: items[i].product.ProName,
							quantity: items[i].product.Quantity,
						}
					erList.push(item);
					check=1;
					}
				};

				if(check==1)
					{
						var vm={
								er: er,
								erList,
								items: req.session.cart,
						        totalAmount:total,
						        Ship: config.SHIP_FEE,
						        totalAmountShip: total+ config.SHIP_FEE
						}
						console.log("Omg work");
						 res.render('cart/index', vm);
					}
					else
					{
							  orderRepo.addOrder(OrderDate,userID,total,Adress).then(rows =>{
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

					})
					
					req.session.cart=[];
					var vm ={
					 noti: "Đặt hàng thành công!!"
					}
					res.redirect("/order");
		      });
				}
  
	
});








module.exports = router;