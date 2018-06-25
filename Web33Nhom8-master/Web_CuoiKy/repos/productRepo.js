var db = require('../fn/db');
var config = require('../config/config');

exports.loadAll = () => {
	var sql = 'select * from products';
	return db.load(sql);
}
exports.load4ByView = offset => {
	var sql = `select * from products  order by View desc limit 4 offset ${offset} `;
	return db.load(sql);
}
exports.load4ByNew = offset => {
	var sql = `select * from products  order by CatID desc limit 4 offset ${offset}`;
	return db.load(sql);
}
exports.load4BySell = offset => {
	var sql = `select * from products  order by Sell desc limit 4 offset ${offset} `;
	return db.load(sql);
}


exports.load4ByCat =(catId, offset) => {
	var sql = `select * from products where CatID = ${catId} limit 4 offset ${offset}`;
	return db.load(sql);
}
exports.load4ByProducer = (producerId, offset) => {
	var sql = `select * from products where ProducerID = ${producerId}  limit 4 offset ${offset} `;
	return db.load(sql);
}









exports.loadAllByCat = catId => {
	var sql = `select * from products where CatID = ${catId}`;
	return db.load(sql);
}









exports.loadPageByCat = (catId, offset) => {
	var sql = `select * from products where CatID = ${catId} limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
	return db.load(sql);
}

exports.countByCat = catId => {
	var sql = `select count(*) as total from products where CatID = ${catId}`;
	return db.load(sql);
}

exports.single = id => {
	var sql = `select * from products join categories on (products.CatID = categories.CatID) join producers on (products.ProducerID = producers.ProducerID)  where ProID = ${id}`;
	return db.load(sql);
}
