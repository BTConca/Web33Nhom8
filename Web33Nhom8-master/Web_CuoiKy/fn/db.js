var mysql = require('mysql');

exports.load = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> parent of c7effc1... Merge branch 'master' into admin
            password: 'root',
=======
            password: '',
>>>>>>> parent of 932b89b... Admin
            database: 'qlbh'
        });

        cn.connect();

        cn.query(sql, function(error, rows, fields) {
            if (error) {
            	reject(error);
            } else {
            	resolve(rows);
            }

            cn.end();
        });
    });
}

exports.save = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
<<<<<<< HEAD
            password: 'root',
<<<<<<< HEAD
            database: 'qlbh',
             datestring:'date'
=======
            password: '',
            database: 'qlbh'
>>>>>>> parent of 932b89b... Admin
=======
            database: 'qlbh'
>>>>>>> parent of c7effc1... Merge branch 'master' into admin
        });

        cn.connect();

        cn.query(sql, function(error, value) {
            if (error) {
                reject(error);
            } else {
                resolve(value);
            }

            cn.end();
        });
    });
}