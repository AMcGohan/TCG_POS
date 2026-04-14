import pool from "../db/connection.js"

export async function getAllMTGCardsService() {
    try {
        const [rows] = await pool.query('SELECT name, setCode, printings FROM cards WHERE name = ?', ['Ponder']);
        console.log("Magic result: ", rows);
        return rows;
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
