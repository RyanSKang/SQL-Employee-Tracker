-- Creating raw data for department --
INSERT INTO department (name)

VALUES ("Production"), ("Shipping"), ("Extrusion"), ("Engineering");

-- Creating raw data into role
INSERT INTO role (title, salary, department_id)

VALUE ("Plant Manager", 150000.00,1), ("Production Planner", 75000.00,2), ("Warehouse Supervisor" , 60000.00,3), ("Extruder Operator", 40000.00, 4);

-- Creating raw data into employee -- 
INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUE ("Ryan", "Kang", 2,1), ("Sally", "Pancheri", 1,1), ("Thomas", "Hess",3,2), ("Cory", "Mcaughlin", 4,3)