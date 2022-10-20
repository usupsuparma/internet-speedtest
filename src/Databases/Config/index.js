const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize(process.env.URL_DATABASE);

module.exports = {
    sequelize,
    Model,
    DataTypes,
}