var db = require('../fn/db');
var config = require('../config/config');

exports.loadAll = () => {
	var sql = 'select * from orders order by OrderID desc';
	return db.load(sql);
}
exports.single = id => {
	var sql = `select * from orders where OrderID = ${id}  `;
	return db.load(sql);
}
exports.getByUserID = userid => {
	var sql = `select * from orders where UserID = ${userid} order by OrderID desc `;
	return db.load(sql);
}

exports.getProductByOrderID = orderid => {
	var sql = `select products.Price as Price, products.TinyDes as TinyDes, products.ProID as ProID, products.ProName as ProName, orderdetails.Quantity as Qty, orderdetails.Amount as Amount from orderdetails join products on (orderdetails.ProID=products.ProID) where orderdetails.OrderID = ${orderid} `;
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
	var sql = `insert into orderdetails(OrderID,ProID,Quantity,Price,Amount) values (${OrderID},${ProID},${Quantity},${Price},${Amount})`;
	return db.save(sql);
}

exports.loadPage = offset => {
	var sql = `select * from orders limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
	return db.load(sql);
}

exports.update = orders => {
	var sql = `update orders set Adress = '${orders.Adress}', Status = '${orders.Status}' ,Total = '${orders.Total}', UserID = '${orders.UserID}', OrderDate = '${orders.OrderDate}'  where OrderID = ${orders.OrderID}`;
	return db.save(sql);
}
