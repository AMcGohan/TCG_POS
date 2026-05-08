import { DataTypes } from "sequelize";
import sequelize from "../../db/sequelize.js";

const buy_list = sequelize.define(
    "List",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        customer_id: {
            type:DataTypes.INTEGER,
            allowNull:false
        },
        emp_id: {
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        tableName:"buy_list",
        timestamps:true
    }
);

export default buy_list;