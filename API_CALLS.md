Base URL: `http://localhost:3000/api`

# GET requests
* `/list/:id` = fetch card list by ID
* `/admin/emp` = fetch all employees
* `/cards/mtg/:name` = fetch MTG cards that contain name (case sensitive)

# POST requests
* `/admin/emp` = create a new employee (JSON body)
```json
{
    "emp_fname": "Firstname",
    "emp_lname": "Lastname"
}
```

* `/list` = create buy_list
```json
{
    "customer_id": "customerid",
    "emp_id": "employeeId"
}
```
* `/list/:id` = add to buy_list
```json
{
    "card_id": "cardId",
    "price_id": "priceId",
    "quantity": "3"
}
```

# DELETE requests
* `/list/:id` = deletes list and card_order associated with `list_id`