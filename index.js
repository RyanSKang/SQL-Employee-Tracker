// Dependencies defined and importing 
const db = require('./config/connection');
const {employee_db} = require ('./utils/db')

// Starting server after connecting to connection.js
db.connect(err => {
    if(err) throw(err);
    console.log('Connected to employee_db');
    employee_db()
});