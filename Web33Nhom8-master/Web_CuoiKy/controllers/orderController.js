var express = require('express'),
    orderRepo = require('../repos/orderRepo'),
    cartRepo = require('../repos/cartRepo'),
     productRepo = require('../repos/productRepo'),
    config = require('../config/config'),
      moment = require('moment');
var router = express.Router();

router.get('/', (req, res) => {
	var orders = [];
	var info = []
	var UserID =   req.session.curUser.f_ID;
	orderRepo.getByUserID(UserID).then(rows=>
			{
				var orders = [];
				for(var i=0;i<rows.length;i++)
				{
					var OrderDate= moment(rows[i].OrderDate, 'D/M/YYYY')
            .format('DD-MM-YYYY');
            		var Adress = rows[i].Adress;
            		var Total= rows[i].Total;
            		var Status = rows[i].Status;
            		var OrderID = rows[i].OrderID;
            		var k=
            		{
            			OrderID,
            			OrderDate,
            			Adress,
            			Total,
            			Status
            		}
            		orders.push(k);

				}

		vm={
			orders,
		};
res.render('order/index',vm);

	});
});


router.get('/detail/:orderId', (req, res) => {
    var orderId = req.params.orderId;

   orderRepo.single(orderId).then(order=>
   {
   	orderRepo.getProductByOrderID(orderId).then(
   		products=>
   		{

   			var UserID =   req.session.curUser.f_ID;
   			if(UserID==order[0].UserID)
   			{
   				var Dat= moment(order[0].OrderDate, 'D/M/YYYY')
            .format('DD-MM-YYYY');
   				vm={
   					grandtotal: config.SHIP_FEE+order[0].Total,
   					Ship:config.SHIP_FEE,
   					Dat,
				erro:false,
   				Order: order[0],
   				Products: products,
   				};
   			}
   			else
   			{
   				vm={
   					erro: true,
   				};
   			}
   			console.log(vm);
   			res.render('order/detail',vm);
   		});
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
