const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "G%20y36t*%m17",
    database: "employee_schema",
});

module.exports = mysqlPool;
