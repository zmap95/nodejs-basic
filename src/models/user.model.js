const dbConnection = require('./../database/connection');
const table = 'users';

exports.get = () => {
    let sql = `SELECT * FROM ${table}`;

    return new Promise(data => {
        dbConnection.query(sql, function (error, result) {
            if (error) {
                console.log(error);
                throw error;
            }

            try {
                console.log(result);

                data(result);

            } catch (error) {
                data({});
                throw error;
            }
        });
    });
}


exports.create = (user) => {
    let sql = `INSERT INTO ${table} (username, email, password)
    VALUES ('${user.username}', '${user.email}', '${user.password}')`;

    return new Promise(data => {
        dbConnection.query(sql, function (error, result) {
            if (error) {
                console.log(error);
                throw error;
            }

            try {
                console.log(result);

                data(result);

            } catch (error) {
                data({});
                throw error;
            }
        });
    });
}