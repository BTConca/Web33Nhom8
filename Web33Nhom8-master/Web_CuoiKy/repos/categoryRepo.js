var db = require('../fn/db');

exports.loadAll = () => {
	var sql = 'select * from categories';
	return db.load(sql);
}

exports.single = id => {
	var sql = `select * from categories where CatID = ${id}`;
	return db.load(sql);
}

exports.add = category => {
	var sql = `insert into categories(CatName) values('${category.CatName}')`;
	return db.save(sql);
}

exports.delete = id => {
	var sql = `delete from categories where CatID = ${id}`;
	return db.save(sql);
}

exports.update = category => {
	var sql = `update categories set CatName = '${category.CatName}' where CatID = ${category.CatID}`;
	return db.save(sql);
}