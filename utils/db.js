// Import and require inquirer
const inquirer = require('inquirer');
const db = require('../config/connection');

// Starting screen once logged into node
let employee_db = function () {
    inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            "View all department",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update Employee Role",
            "Quit Application",
        ]
    }).then(function (result) {
        console.log('You selected: ' + result.option);

        // Switch statements for all choices in prompt
        switch (result.option) {
            case "View all department":
                viewDepartment();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "View all employees":
                viewEmployees();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update Employee Role":
                updateEmployee();
                break;
            default:
                quitApplication();
        }
    })
};

// viewDepartment() Function
function viewDepartment() {
    db.query('SELECT * FROM department', function (err, res) {
        if (err) throw (err);
        console.table(res);
        employee_db();
    });
};

// viewRoles() Function
function viewRoles() {
    db.query('SELECT * FROM role', function (err, res) {
        if (err) throw (err);
        console.table(res);
        employee_db();
    })
};

// viewEmployees() Function
function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, res) {
        if (err) throw (err);
        console.table(res);
        employee_db();
    })
};

// addDepartment() Function
function addDepartment() {
    inquirer.prompt({
        type: "input",
        message: "What is the department called?",
        name: "departmentName"
    }).then(function (answer) {
        db.query("INSERT INTO department (name) VALUES (?)", [answer.departmentName], function (err, res) {
            if (err) throw (err);
            console.table(res);
            employee_db();
        })
    })
};

// addRole() Function
function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please input role",
            name: "roleTitle"
        },
        {
            type: "input",
            message: "Please input salary for this role",
            name: "salary"
        },
        {
            type: "input",
            message: "Please input department ID number",
            name: "departmentID"
        }
    ]).then(function (answer) {
        db.query("INSTERT INTO role (title,salary,departmentID) VALUES (?,?,?)", [answer.roleTitle, answer.salary, answer.departmentID], function (err, res) {
            if (err) throw (err);
            console.table(res);
            employee_db()
        })
    })
};

// addEmployee() Function
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "First name of Employee?",
            name: "firstName"
        },
        {
            type: "input",
            message: "Last name of Employee?",
            name: "lastName"
        },
        {
            type: "input",
            message: "Please input employee's role ID number",
            name: "roleID"
        },
        {
            type: "input",
            message: "Please input the manager ID number",
            name: "managerID"
        }
    ]).then(function (answer) {
        db.query('INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES(?,?,?,?)', [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function (err, res) {
            if (err) throw (err);
            console.table(res);
            employee_db();
        });
    });
};

// updateEmployee() Function
function updateEmployee(){
    inquirer.prompt([
        {
            type:"input",
            message:"Which employee would you like to update?",
            name:"employeeUpdate"
        },
        {
            type:"input",
            message:"What do you want to change the new Role to?",
            name:"updateRole"
        }
        
    ]).then(function(answer){
       db.query('UPDATE employee SET roleID=? WHERE firstName= ?', [answer.updateRole, answer.employeeUpdate], function(err,res){
        if(err) throw(err);
        console.table(res);
        employee_db();
       })
    })
};

// quitApplication() Function
function quitApplication(){
    db.end();
    process.exit();
}

module.exports = { employee_db };