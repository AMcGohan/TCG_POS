import { DataTypes } from "sequelize";
import sequelize from "../../db/sequelize.js";

const employee = sequelize.define(
    "Employee",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        emp_fname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emp_lname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName:"employee",
        timestamps: false
    }
);

export default employee;