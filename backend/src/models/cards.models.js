import pool from "../db/connection.js"

export async function getAllCards() {
    try {
        const result = await pool.query('SELECT * FROM "cards";');
        console.log(result.rows);
        return result.rows;
    } catch (error) {
        console.error("Database error:", error.message);
        throw error;
    }
}