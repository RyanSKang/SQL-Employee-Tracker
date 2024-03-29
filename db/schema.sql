-- Creating Database --
DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

-- Creating department table -- 
CREATE TABLE  department(

    id INT NOT NULL AUTO_INCREMENT,

    name VARCHAR(30) NULL, 

    PRIMARY KEY(id)
);

-- Creating role table --
CREATE TABLE role(

    id INT NOT NULL AUTO_INCREMENT,

    title VARCHAR(30) NULL, 

    salary DECIMAL NULL,

    department_id INT NULL, 

    PRIMARY KEY(id)
);

-- Creating employee table
CREATE TABLE employee(

    id INT NOT NULL AUTO_INCREMENT,

    first_name VARCHAR(30) NULL, 

    last_name VARCHAR(30) NULL, 

    role_id INT NULL, 

    manager_id INT NULL, 

    PRIMARY KEY(id)

)