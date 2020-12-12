const db = require('../models/index');
const Employee = db.employee;

module.exports = {

    async listAllEmployees() {
        return await Employee.findAll();
    },

    async findEmployeeById(id) {
        return await Employee.findByPk(id);
    },

    async createNewEmployee(employee) {
        return await Employee.create(employee);
    },

    async updateEmployeeById(id, employee) {
        return await Employee.update({
            name: employee.name,
            salary: employee.salary,
            bornDate: employee.bornDate,
            position: employee.position
        }, {
            where: { id: id }
        });
    },

    deleteEmployeeById(id) {
        Employee.destroy({
            where: {
                id: id
            }
        });;
    }
};