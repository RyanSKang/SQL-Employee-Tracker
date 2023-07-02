// Import and require inquirer
const inquirer = require('inquirer');
const db= require ('../config/connection');

// Starting screen once logged into node
let employee_db= function() {
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
    }).then (function(result){
        console.log('You selected: '+ result.option);

        // Switch statements for all choices in prompt
        switch (result.option){
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
function viewDepartment(){
    db.query('SELECT * FROM department', function (err,res) {
        if(err) throw (err);
        console.table(res);
        employee_db();
    });
}

// viewRoles() Function
function viewRoles() {
    db.query('SELECT * FROM role', function (err,res){
        if(err) throw (err);
        console.table(res);
        employee_db();
    })
}






module.exports= {employee_db};