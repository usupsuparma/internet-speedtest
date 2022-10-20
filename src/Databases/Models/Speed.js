"use strict";
const { Model, DataTypes, sequelize } = require('../Config');

class Speed extends Model {

}

Speed.init({
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    speed: {type: DataTypes.INTEGER, allowNull: false, },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true
    },
    deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true
    }
},
{
    sequelize,
    modelName: 'Speed',
    tableName: 'speeds',
    underscored: true,
    paranoid: true,
    timestamps: true
}
)

module.exports = Speed;