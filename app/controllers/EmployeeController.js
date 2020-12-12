const Service = require("../service/EmployeeService");

module.exports = {
    async getAll(req, res) {
        try {
            const employee = await Service.listAllEmployees();
            return res.status(202).json(employee);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async getById(req, res) {
        const id = req.params.id;
        try {
            const data = await Service.findEmployeeById(id);

            if (data === null) {
                res.status(404).send({
                    message: `Employee with id:${id} not found!`,
                });
            }
            return res.json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async save(req, res) {
        try {
            // Validate Name
            if (!req.body.name) {
                res.status(400).send({
                    message: "Name can not be empty!",
                });
                return;
            }
            // Validate Salary
            if (!req.body.salary) {
                res.status(400).send({
                    message: "Salary can not be empty!",
                });
                return;
            }
            // Validate Position
            if (!req.body.position) {
                res.status(400).send({
                    message: "Position can not be empty!",
                });
                return;
            }
            // Validate BornDate
            if (!req.body.bornDate) {
                res.status(400).send({
                    message: "BornDate can not be empty!",
                });
                return;
            }
            // Validate Position
            if (!req.body.position) {
                res.status(400).send({
                    message: "Position can not be empty!",
                });
                return;
            }

            // Create a Employee
            const employee = {
                name: req.body.name,
                salary: req.body.salary,
                bornDate: req.body.bornDate,
                position: req.body.position,
            };

            const data = await Service.createNewEmployee(employee);

            return res.status(202).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async updateById(req, res) {
        const id = req.params.id;

        // Create a Employee
        const employee = {
            name: req.body.name,
            salary: req.body.salary,
            bornDate: req.body.bornDate,
            position: req.body.position,
        };
        try {
            const data = await Service.updateEmployeeById(id, employee);

            if (data === null) {
                res.status(404).send({
                    message: `Employee with id:${id} not found!`,
                });
            }

            return res.status(202).json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error.message);
        }
    },

    deleteById(req, res) {
        const id = req.params.id;
        try {
            Service.deleteEmployeeById(id);
            res.status(404).send("Not found");
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
};