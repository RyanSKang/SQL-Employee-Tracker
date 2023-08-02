// Import and require inquirer
const inquirer = require('inquirer');
const db = require('../config/connection');
require('console.table');

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
            case "Quit Application":
                db.end();
                break;
        }
    })
};

// viewDepartment() Function displaying department names and department ids
function viewDepartment() {
    const sql = `SELECT * FROM department`;
    db.query(sql, function (err, res) {
        if (err) {
            console.error(err);
            throw (err);
            }
        console.table(res);
        employee_db();
    });
};

// viewRoles() Function displaying job title, role id, department the role belongs to, and the salary for the role
function viewRoles() {
    const sql=`SELECT role.title, role.id, department.name AS department, role.salary
    FROM role
    LEFT JOIN department
    ON department.id =  role.department_id`
    db.query(sql, function (err, res) {
        if (err) {
            console.error(err);
            throw (err);
            }
        console.table(res);
        employee_db();
    })
};

// viewEmployees() Function showing employee data including employee ids, first name, last name, job title, department, salaries, and managers that the employees report to 
function viewEmployees() {
    const sql= 
    `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee 
    LEFT JOIN role 
    ON employee.role_id = role.id
    LEFT JOIN department 
    ON department.id = role.department_id
    LEFT JOIN employee m
      ON m.id = employee.manager_id`
    db.query(sql, function (err, res) {
        if (err) {
            console.error(err);
            throw (err);
            }
        console.table(res);
        employee_db();
    })
};

// addDepartment() Function displaying newly added department into database
function addDepartment() {
    inquirer.prompt({
        type: "input",
        message: "What is the department called?",
        name: "departmentName"
    }).then(function (answer) {
        db.query("INSERT INTO department (name) VALUES (?)", [answer.departmentName], function (err, res) {
            if (err) {
                console.error(err);
                throw (err);
                }
            console.table(res);
            employee_db();
        })
    })
};

// addRole() Function displaying newly added role into database
function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please input role",
            name: "roleTitle",
            validate: roleTitle => {
                if (roleTitle){
                    return true;
                } else {
                    console.log("Need to enter a role title!")
                }
            }
        },
        {
            type: "input",
            message: "Please input salary for this role",
            name: "salary",
            validate: salary => {
                if (salary){
                    return true;
                }else {
                    console.log('Please enter a salary for this role');
                    return false;
                };
            }
        }
    ])
        .then (answer => {
            const departmentParams= [answer.roleTitle, answer.salary];
            const sql= `SELECT * FROM department`;
            db.query(sql, function (err, res) {
                if (err) {
                    console.error(err);
                    throw (err);
                }
                console.table(res)
                const department= res.map(({name,id}) => ({name: name, value: id}))
                inquirer.prompt([
                    {
                    type: "list",
                    name: "department",
                    message: "Please assign role to a department",
                    choices: department
                    }
                ])
                .then(departmentAnswer => {
                    const department= departmentAnswer.department;
                    departmentParams.push(department);
                    const sql =`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`
                    db.query(sql, departmentParams, (err) => {
                        if (err) {
                            console.error(err);
                            throw (err);
                            }
                        console.log("You successfully added a role");
                        return viewRoles();
                    });
                });
            });
        });
};

// addEmployee() Function
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "First name of Employee?",
            name: "first_name"
        },
        {
            type: "input",
            message: "Last name of Employee?",
            name: "last_name"
        },
        {
            type: "input",
            message: "Please input employee's role ID number",
            name: "role_id"
        },
        {
            type: "input",
            message: "Please input the manager ID number",
            name: "manager_id"
        }
    ]).then(function (answer) {
        const sql=`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`
        db.query(sql, [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function (err, res) {
            if (err) {
            console.error(err);
            throw (err);
            }
            console.table(res);
            employee_db();
        });
    });
};

// updateEmployee() Function
function updateEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Which employee would you like to update?",
            name: "employeeUpdate"
        },
        {
            type: "input",
            message: "What do you want to change the new Role to?",
            name: "updateRole"
        }

    ]).then(function (answer) {
        db.query('UPDATE employee SET role_id=? WHERE first_name= ?', [answer.updateRole, answer.employeeUpdate], function (err, res) {
            if (err) {
                console.error(err);
                throw (err);
                }
            console.table(res);
            employee_db();
        })
    })
};

// quitApplication() Function
function quitApplication() {
    db.end();
    process.exit();
}

module.exports = { employee_db };