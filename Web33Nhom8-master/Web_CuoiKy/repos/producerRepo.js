var db = require('../fn/db');

exports.loadAll = () => {
	var sql = 'select * from producers';
	return db.load(sql);
}

exports.single = id => {
	var sql = `select * from producers where ProducerID = ${id}`;
	return db.load(sql);
}

exports.add = producer => {
	var sql = `insert into producers(ProducerName) values('${producer.ProducerName}')`;
	return db.save(sql);
}

exports.delete = id => {
	var sql = `delete from producers where ProducerID = ${id}`;
	return db.save(sql);
}

exports.update = producer => {
	var sql = `update producers set ProducerName = '${producer.ProducerName}' where ProducerID = ${producer.ProducerID}`;
	return db.save(sql);
}