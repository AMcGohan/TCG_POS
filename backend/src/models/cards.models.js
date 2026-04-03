import pool from "../db/connection.js"

export async function getAllMTGCardsService() {
    try {
        const result = await pool.query('SELECT * FROM "cards";');
        console.log("Magic result: ", result.rows);
        return result.rows;
    } catch (error) {
        console.error("Database error:", error.message);
        throw error;
    }
}

export async function getAllRiftCardsService() {
    try {
        const result = await pool.query('SELECT * FROM "cards" WHERE game = $1;', ['riftbound']);
        console.log("Riftbound result: ", result.rows);
        return result.rows;
    } catch (error) {
        console.error("Database error:", error.message);
        throw error;
    }
    }
