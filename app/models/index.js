const Sequelize = require("sequelize");
const config = require('../config/database')

const db = {};
const sequelize = new Sequelize(config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.employee = require('./Employee')(sequelize, Sequelize);

module.exports = db;