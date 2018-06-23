var db = require('../fn/db');
var config = require('../config/config');

exports.loadAll = () => {
	var sql = 'select * from products';
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