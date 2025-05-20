LOCK TABLES `employee_schema`.`employees` WRITE;
INSERT INTO `employee_schema`.`employees` VALUES 
(1,'Samantha Jones','EMP97',80000),
(2,'Lily Ben','EMP91',92000),
(3,'Albert Alberto','EMP99',84000),
(4,'Wendy Smith','EMP70',85000);
UNLOCK TABLES;