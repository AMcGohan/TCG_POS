import { DataTypes } from "sequelize";
import sequelize from "../../db/sequelize.js";

const customer = sequelize.define(
    "Customer",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_no: {
            type: DataTypes.STRING,
            allowNull:true,
            unique:true
        },
        email: {
            type: DataTypes.STRING,
            allowNull:true,
            unique:true
        }
    },
    {
        tableName:"customer",
        timestamps: false
    }
);

export default customer;