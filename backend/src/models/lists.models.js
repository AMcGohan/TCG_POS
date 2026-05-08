import pool from "../db/connection.js";
import buy_list from "./definitions/List.js";
import card_order from "./definitions/Card_Order.js";
import card from "./definitions/Card.js";
import customer from "./definitions/Customer.js";
import card_price from "./definitions/Card_Price.js";

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

card_price.hasMany(card_order, { foreignKey: 'price_id'});
card_order.belongsTo(card_price, { foreignKey: 'price_id'});

buy_list.belongsTo(customer, { foreignKey: 'customer_id'});
customer.hasMany(buy_list, { foreignKey: 'customer_id'});

export async function getBuyListService(id) {
    try {
        const result = await buy_list.findByPk(id, {
            include: [
                {
                    model: customer,
                    attributes: ['fname', 'lname']
                },
                {
                    model: card_order,
                    include: [
                        {
                            model: card,
                            attributes: ['card_name', 'card_img', 'set', 'treatment']
                        },
                        {
                            model: card_price,
                            attributes: ['reg_price', 'foil_price']
                        }
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

export async function addToBuyListService(id, cardToAdd) {
    try {
        const cardOrderRes = await card_order.create({
            list_id: id,
            card_id: cardToAdd.card_id,
            price_id: cardToAdd.price_id,
            quantity: cardToAdd.quantity
        });
    } catch(error) {
        console.error(error.message);
        throw error;
    }
}