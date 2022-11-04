INSERT INTO departments (department_name)
VALUES ("Business"),
        ("Accounting"),
        ("Finger Pointing"),
        ("shennanigans");

INSERT INTO roles (title, salary, departments_id)
VALUES  ("engineer", 25, 4),
        ("food_supplier", 300, 3),
        ("lousy_cook", 10000, 2),
        ("youtuber", 800, 4),
        ("Doer", 250000, 1),
        ("manager", 23776, 3);


INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Bill", "Christopherson", 2, 2),
        ("Jim", "capital", 6, NULL),
        ("Henry", "Conroy", 4, 2),
        ("Howard", "Stern", 3, 2),
        ("Boward", "Stern", 3, 2);

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;
