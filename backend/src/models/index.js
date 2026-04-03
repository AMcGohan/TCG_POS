import sequelize from "../db/sequelize.js";

export async function initDB() {
    await sequelize.authenticate();
    await sequelize.sync();
}

export {sequelize};