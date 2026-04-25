import pool from "../db/connection.js"

export async function getMTGCardService(name) {
    try {
        const [rows] = await pool.query('SELECT name, setCode, number FROM mtg WHERE name = ?', [name]);
        console.log("Magic result: ", rows);
        console.log("Input: ", name)
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
