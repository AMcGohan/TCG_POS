CREATE TABLE `card` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `card_name` VARCHAR(255),
  `card_img` VARCHAR(255),
  `game` VARCHAR(255),
  `set` VARCHAR(255),
  `cn` VARCHAR(20),
  `treatment` VARCHAR(255)
);

CREATE TABLE `customer` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `fname` VARCHAR(255),
  `lname` VARCHAR(255),
  `phone_no` VARCHAR(20) UNIQUE,
  `email` VARCHAR(255)
);

CREATE TABLE `employee` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `emp_fname` VARCHAR(255),
  `emp_lname` VARCHAR(255)
);

CREATE TABLE `buy_list` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `customer_id` INT,
  FOREIGN KEY (customer_id) REFERENCES customer(id),
  `emp_id` INT,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `card_price` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `card_id` INT,
  FOREIGN KEY (card_id) REFERENCES card(id),
  `reg_price` decimal(10,2),
  `foil_price` decimal(10, 2),
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `card_inventory` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `card_id` INT,
  FOREIGN KEY (card_id) REFERENCES card(id),
  `condition` ENUM('Damaged', 'Heavily Played', 'Moderately Played','Light Played'),
  `count` INT,
  `foil` boolean,
  `location` ENUM('Binder', 'Case', 'Box')
);

CREATE TABLE `card_order` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `list_id` INT,
  FOREIGN KEY (list_id) REFERENCES buy_list(id) ON DELETE CASCADE,
  `card_id` INT,
  FOREIGN KEY (card_id) REFERENCES card(id),
  `price_id` INT,
  FOREIGN KEY (price_id) REFERENCES card_price(id),
  `quantity` INT
);

CREATE TABLE `trade_list` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `customer_id` INT,
  FOREIGN KEY (customer_id) REFERENCES customer(id),
  `status` ENUM('in progress','awaiting response','finished'),
  `credit` decimal(10,2),
  `emp_id` INT,
  FOREIGN KEY (emp_id) REFERENCES employee(id),
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `card_trade` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `list_id` INT,
  FOREIGN KEY (list_id) REFERENCES trade_list(id) ON DELETE CASCADE,
  `card_id` INT,
  FOREIGN KEY (card_id) REFERENCES card(id),
  `price_id` INT,
  FOREIGN KEY (price_id) REFERENCES card_price(id),
  `trade_value` decimal(10,2),
  `quantity` int
);