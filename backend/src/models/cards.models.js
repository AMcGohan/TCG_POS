import pool from "../db/connection.js"

export async function getMTGCardService(name) {
    try {
        const [rows] = await pool.query('SELECT card_name, card_img, `set`, cn, treatment FROM card WHERE card_name LIKE ?', ["%" + name + "%"]);
        console.log("Magic result: ", rows);
        console.log("Input: ", name)
        return rows;
    } catch (error) {
        console.error("Database mtg error:", error.message);
        throw error;
    }
}

export async function getAllRiftCardsService() {
    try {
        const result = await pool.query('SELECT * FROM "cards" WHERE game = $1;', ['riftbound']);
        console.log("Riftbound result: ", result.rows);
        return result.rows;
    } catch (error) {
        console.error("Database riftbound error:", error.message);
        throw error;
    }
}

export async function getBuyListService(id) {
    try {
        const [rows] = await pool.query(
            `SELECT 
                buy_list.id AS list_id,
                buy_list.customer_id,
                customer.fname,
                customer.lname,
                card.card_name,
                card_price.price
            FROM buy_list
            INNER JOIN card_order ON card_order.list_id = buy_list.id
            INNER JOIN card ON card.id = card_order.card_id
            INNER JOIN card_price ON card_price.id = card_order.price_id
            INNER JOIN customer ON customer.id = buy_list.customer_id
            WHERE buy_list.id = ?`,
            [id]
        );

        const result = {
            list_id: rows[0].list_id,
            customer: {
                id: rows[0].customer_id,
                fname: rows[0].fname,
                lname: rows[0].lname
            },
            cards: rows.map(row => ({
                card_name: row.card_name,
                price: row.price
            }))
        };

        return result;
    } catch (error) {
        console.error("Database fetch buylist error: ", error.message);
        throw error;
    }
}
