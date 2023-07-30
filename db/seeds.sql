-- Using employee_db
USE employee_db;

-- Creating raw data for department --
INSERT INTO department (name)
VALUES ("Production");

INSERT INTO department (name)
VALUES ("Shipping");

INSERT INTO department (name)
VALUES ("Extrusion");

INSERT INTO department (name)
VALUES ("Engineering");


-- Creating raw data into role
INSERT INTO role (title, salary, department_id)
VALUE ("Tool/Mold Changer", 150000.00,4);

INSERT INTO role (title, salary, department_id)
VALUE ("Production Planner", 75000.00,1);

INSERT INTO role (title, salary, department_id)
VALUE ("Warehouse Supervisor" , 60000.00,2);

INSERT INTO role (title, salary, department_id)
VALUE ("Extruder Operator", 40000.00, 3);


-- Creating raw data into employee -- 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Ryan", "Kang", 2,1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Sally", "Pancheri", 1,1); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Thomas", "Hess",3,2); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Cory", "Mcaughlin", 4,3);