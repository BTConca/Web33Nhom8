var mysql = require('mysql');

exports.load = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 7a57e92... Revert "Admin"
=======
>>>>>>> parent of 94c4bb9... Revert "Merge branch 'master' into admin"

            password: 'root',
            database: 'qlbh'
=======
            password: '',
<<<<<<< HEAD
            database: 'qlbh2',
            datestring:'date'
>>>>>>> parent of 69d39c3... Merge pull request #1 from BTConca/admin
=======
>>>>>>> parent of 932b89b... Admin
            database: 'qlbh'
            datestring:'date'

>>>>>>> parent of 94c4bb9... Revert "Merge branch 'master' into admin"
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 7a57e92... Revert "Admin"
            password: 'root',
            database: 'qlbh',
=======
            password: '',
            database: 'qlbh2',
>>>>>>> parent of 69d39c3... Merge pull request #1 from BTConca/admin
             datestring:'date'
<<<<<<< HEAD
=======
            password: '',
            database: 'qlbh'
>>>>>>> parent of 932b89b... Admin
<<<<<<< HEAD
=======
            database: 'qlbh'
>>>>>>> parent of c7effc1... Merge branch 'master' into admin
=======
>>>>>>> parent of 7a57e92... Revert "Admin"
=======
>>>>>>> parent of 94c4bb9... Revert "Merge branch 'master' into admin"
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