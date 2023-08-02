# SQL EMPLOYEE TRACKER
  
## Description:
This application is a built in command-line application to manage a company's employee database, using Node.js, Inquirer, and MySql. I learned alot on utilizing primary keys from different tables to manipulate data in order to display what I want. The biggest challenge I had for this project was to stay consistent in my column naming and calling my queries based on my schema.sql. Something I tried doing differently is utilizing a utils folder that holds the bulk of my code that would be routed to my index.js so that I can compartmentalize my work. Moving forward I think I will compartmentalize my work even further so it is easier to read code and minimize the quantity of lines of code per file. 

## User Story
```md
AS A business owner  
I WANT to be able to view and manage the departments, roles, and employees in my company  
SO THAT I can organize and plan my business  
```

## Table of Contents:
- [Overview](#Overview)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage Instructions](#usage-instructions) 
- [Usage Screenshots](#screenshots)
- [Walkthrough Video](#walkthrough-video)
- [Credits](#credits)  

# Overview

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input  
WHEN I start the application  
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role  
WHEN I choose to view all departments  
THEN I am presented with a formatted table showing department names and department ids  
WHEN I choose to view all roles  
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role  
WHEN I choose to view all employees  
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to  
WHEN I choose to add a department  
THEN I am prompted to enter the name of the department and that department is added to the database  
WHEN I choose to add a role  
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database  
WHEN I choose to add an employee  
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database  
WHEN I choose to update an employee role  
THEN I am prompted to select an employee to update and their new role and this information is updated in the database  
```

## Installation
Git clone Repository: [SQL EMPLOYEE TRACKER](https://github.com/RyanSKang/SQL-Employee-Tracker)  
Following Installation Needed:  
    -Node.js [v16.16.0](https://nodejs.org/en/blog/release/v16.16.0)  
    -mySQL2 [v3.4.3](https://www.npmjs.com/package/mysql2)  
    -Inquirer [v8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4#installation)  
    -Console.table [v0.10.0](https://www.npmjs.com/package/console.table)  

## Usage Instructions
 1. Execute an NPM Install in terminal  
 2. Access mysql in terminal: mysql -uroot -p  
 3. SOURCE schema.sql: "Source db/schema.sql"  
 4. USE database based on schema.sql: "Use employee_db"  
 5. SOURCE seeds.sql: "Source db/seeds.sql"  
 6. Go on root terminal and execute npm start  
 7. Follow inquirer prompts to see Database tables and other functions!  

## Screenshots
### Figure 1. Inquirer Prompt
![Screenshot 2023-08-02 at 1 04 55 AM](https://github.com/RyanSKang/SQL-Employee-Tracker/assets/124969918/99b96455-7662-4cf7-9f81-48a37530483f)  
### Figure 2. View All Department
![Screenshot 2023-08-02 at 1 05 19 AM](https://github.com/RyanSKang/SQL-Employee-Tracker/assets/124969918/2d163018-b541-44cf-96ed-80cea894e1cf)  
### Figure 3. View All Roles
![Screenshot 2023-08-02 at 1 05 41 AM](https://github.com/RyanSKang/SQL-Employee-Tracker/assets/124969918/f6322235-f972-4a1f-89f7-a2bab4520b3f)  
### Figure 4. View All Employees
![Screenshot 2023-08-02 at 1 05 53 AM](https://github.com/RyanSKang/SQL-Employee-Tracker/assets/124969918/3d755cfe-3d6a-4862-a1b5-b2b3857e465b)  
### Figure 5. Add a Department
![Screenshot 2023-08-02 at 1 06 34 AM](https://github.com/RyanSKang/SQL-Employee-Tracker/assets/124969918/d585ef89-7ef1-4ece-96b2-417c481d124b)  
### Figure 6. Add an Employee
![Screenshot 2023-08-02 at 1 07 57 AM](https://github.com/RyanSKang/SQL-Employee-Tracker/assets/124969918/b9bd23de-13cc-4903-bb0d-a32191abf1ff)  
### Figure 7. Add a Role
![Screenshot 2023-08-02 at 1 08 57 AM](https://github.com/RyanSKang/SQL-Employee-Tracker/assets/124969918/5649c18a-8fb2-41e7-a47d-1754b6b004b8)  
### Figure 8. Update an Employee
![Screenshot 2023-08-02 at 1 09 27 AM](https://github.com/RyanSKang/SQL-Employee-Tracker/assets/124969918/4a0aeab4-e5d6-4f94-a72d-cddce58d33f2)

## Walkthrough Video
<a href="chrome-extension://mmeijimgabbpbgpdklnllpncmdofkcpn/app.html#/files/e740d588-2eac-46fd-y754-c11561a1da52" target="_blank">Walkthrough Video Link</a>

## Credits
-1 on 1 Tutor: Julio Valdez  
-AskBCS Learning Assistant




