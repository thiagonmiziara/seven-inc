module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        salary: {
            type: Sequelize.DECIMAL(10, 2)
        },
        bornDate: {
            type: Sequelize.DATE
        },
        position: {
            type: Sequelize.STRING
        }
    });

    return Employee;
};