var db = require('../fn/db');

exports.add = user => {
	var sql = `insert into users(f_Username, f_Password, f_Name, f_Email, f_DOB, f_Permission) values('${user.username}', '${user.password}', '${user.name}', '${user.email}', '${user.dob}', ${user.permisson})`;
	return db.save(sql);
}

exports.login = user => {
	var sql = `select * from users where f_Username = '${user.username}' and f_Password = '${user.password}'`;
	return db.load(sql);
}
exports.check = username =>{
	var sql = `select count(*) as total from users where f_Username = '${username}' `;
	return db.load(sql);
}
