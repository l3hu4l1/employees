const db = require("../db");

module.exports.getAllEmployees = async () => {
    const [rows] = await db.query("SELECT * FROM employees");
    return rows;
};

module.exports.getEmployeeById = async (id) => {
    const [{rows}] = await db.query("SELECT * FROM employees WHERE id = ?", [id]);
    return rows;
};

module.exports.deleteEmployee = async (id) => {
    const [{affectedRows}] = await db.query("DELETE FROM employees WHERE id = ?", [id]);
    return affectedRows;
};

module.exports.addOrEditEmployee = async (obj, id=0) => {
    const [[[{affectedRows }]]] = await db.query(
        "CALL usp_employee_add_or_edit(?,?,?,?)",
        [id, obj.name, obj.employee_code, obj.salary]
    );
    return affectedRows;
};