// Import and require Mysql2
const mysql = require('mysql2');

// Connect to Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'Enzo',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

module.exports = db;