import { DataTypes } from "sequelize";
import sequelize from "../../db/sequelize.js";

const card_price = sequelize.define(
    "Card_Price",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        card_id: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    },
    {
        tableName:"card_price",
        timestamps: true
    }
);

export default card_price;