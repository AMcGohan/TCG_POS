import { DataTypes } from "sequelize";
import sequelize from "../../db/sequelize.js";

const card_order = sequelize.define(
    "Card_Order",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        list_id: {
            type:DataTypes.INTEGER,

            allowNull:false
        },
        card_id: {
            type:DataTypes.INTEGER,
            allowNull:false
        },
        price_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    },
    {
        tableName:"card_order",
        timestamps:false
    }
)

export default card_order;