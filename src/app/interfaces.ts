interface Customer {
  fname: string;
  lname: string;
}

interface Employee {
  emp_fname: string;
  emp_lname: string;
}

export interface BuyList {
  id: number;
  customer_id: number;
  emp_id: number;
  createdAt: string;
  updatedAt: string;
  Customer: Customer;
  Employee: Employee;
  Card_Orders: CardListItem[];
}

export interface Card {
  card_name: string;
  card_img: string;
  set: string;
  treatment: string;
  cn: string;
}

interface CardPrice {
  reg_price: string;
  foil_price: string;
}

export interface CardListItem {
  id: number;
  list_id: number;
  card_id: number;
  price_id: number;
  quantity: number;
  Card: Card;
  Card_Price: CardPrice;
}

export interface ApiResponse {
  buyList: BuyList;
}

type CardList = CardListItem[];