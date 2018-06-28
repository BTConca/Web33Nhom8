var db = require('../fn/db');
var config = require('../config/config');

exports.loadAll = () => {
	var sql = 'select * from orders order by OrderDate desc';
	return db.load(sql);
}
exports.single = id => {
	var sql = `select * from orders where OrderID = ${id} `;
	return db.load(sql);
}
exports.getByUserID = userid => {
	var sql = `select * from orders where UserID = ${userid} `;
	return db.load(sql);
}
exports.getProductByOrderID = orderid => {
	var sql = `select * from orderdetails join products on (orderdetails.ProID=products.ProID) where OrderID = ${orderid} `;
	return db.load(sql);
}
exports.addOrder = (OrderDate,UserID,Total,Adress) => {
var sql = `insert into orders(OrderDate,UserID,Total,Adress) values('${OrderDate}', '${UserID}', '${Total}','${Adress}')`;
	return db.save(sql);
}
exports.getLastOrderID = () =>
{
	var sql = `select OrderID from orders order by OrderID desc`;
	return db.save(sql);
}
exports.addOrderDetail = (OrderID,ProID,Quantity,Price,Amount) =>
{
	var sql = `insert into orderdetails(OrderID,ProID,Quantity,Price,Amount) values (${OrderID},${ProID},${Price},${Quantity},${Amount})`;
	return db.save(sql);
}

exports.loadPage = offset => {
	var sql = `select * from orders limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
	return db.load(sql);
}

exports.update = order => {
	var sql = `update orders set Adress = '${order.Adress}', Status = '${order.Status}' ,Total = '${order.Total}', UserID = '${order.UserID}', OrderDate = '${order.OrderDate}'  where OrderID = ${order.OrderID}`;
	return db.save(sql);
}

exports.add = order => {
var sql = `insert into orders(OrderDate,UserID,Total,Adress) values('${order.OrderDate}', '${order.UserID}', '${order.Total}','${order.Adress}')`;
	return db.save(sql);
}