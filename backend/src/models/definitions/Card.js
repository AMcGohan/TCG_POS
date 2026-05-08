import { DataTypes } from "sequelize";
import sequelize from "../../db/sequelize.js";

const card = sequelize.define(
    "Card",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        card_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        card_img: {
            type: DataTypes.STRING,
            allowNull:true
        },
        game: {
            type: DataTypes.STRING,
            allowNull: false
        },
        set: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cn: {
            type: DataTypes.STRING,
            allowNull:false
        },
        treatment: {
            type: DataTypes.STRING,
            allowNull:false
        }
    },
    {
        tableName:"card",
        timestamps: false,
    }
);

export default card;