var db = require('../fn/db');

exports.loadAll = () => {
	var sql = 'select * from donhang';
	return db.load(sql);
}

exports.single = id => {
	var sql = `select * from donhang where ID = ${id}`;
	return db.load(sql);
}

exports.add = donhang => {
	var sql = `insert into donhang(TenDonHang) values('${donhang.TenDonHang}')`;
	return db.save(sql);
}

exports.delete = id => {
	var sql = `delete from donhang where ID = ${id}`;
	return db.save(sql);
}

exports.update = donhang => {
	var sql = `update donhang set TenDonHang = '${donhang.TenDonHang}' where ID = ${donhang.ID}`;
	return db.save(sql);
}