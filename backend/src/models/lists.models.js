import pool from "../db/connection.js";
import buy_list from "./definitions/List.js";
import card_order from "./definitions/Card_Order.js";
import card from "./definitions/Card.js";

buy_list.hasMany(card_order, {
    foreignKey: 'list_id'
});
card_order.belongsTo(buy_list, {
    foreignKey: 'list_id'
});

card.hasMany(card_order, {
    foreignKey: 'card_id'
});
card_order.belongsTo(card, {
    foreignKey: 'card_id'
});


export async function getBuyListService(id) {
    try {
        const result = await buy_list.findByPk(id, {
            include: [
                {
                    model: card_order,
                    include: [
                        {
                            model: card,
                            attributes: ['card_name', 'card_img', 'set', 'treatment']
                        },
                    ]
                }
            ]
        });

        return result;
    } catch (error) {
        console.error("Database fetch buylist error: ", error.message);
        throw error;
    }
}

export async function createBuyListService(listData) {
    try {
        return await buy_list.create({
            customer_id: listData.customer_id,
            emp_id: listData.emp_id
        });
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}