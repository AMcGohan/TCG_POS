CREATE TABLE `card` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `card_name` VARCHAR(255),
  `card_img` VARCHAR(255),
  `game` VARCHAR(255),
  `set` VARCHAR(255),
  `cn` VARCHAR(20),
  `treatment` VARCHAR(255)
);

CREATE TABLE `buy_list` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `customer_id` INT,
  `emp_id` INT,
  `date_created` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `date_updated` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `card_order` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `list_id` INT,
  `card_id` INT,
  `price_id` INT,
  `quantity` INT
);

CREATE TABLE `customer` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `fname` VARCHAR(255),
  `lname` VARCHAR(255),
  `phone_no` VARCHAR(20) UNIQUE,
  `email` VARCHAR(255)
);

CREATE TABLE `trade_list` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `customer_id` INT,
  `status` enum('in progress','awaiting response','finished'),
  `credit` decimal(10,2),
  `emp_id` INT,
  `date_created` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `date_updated` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `card_trade` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `list_id` INT,
  `card_id` INT,
  `price_id` INT,
  `trade_value` decimal(10,2),
  `quantity` int
);

CREATE TABLE `card_price` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `card_id` INT,
  `price` decimal(10,2),
  `date_recorded` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `card_inventory` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `card_id` INT,
  `condition` ENUM('Damaged','Moderately Played','Light Played'),
  `count` INT,
  `foil` boolean
);

CREATE TABLE `employee` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `emp_fname` VARCHAR(255),
  `emp_lname` VARCHAR(255)
);

ALTER TABLE `buy_list` ADD FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);

ALTER TABLE `buy_list` ADD FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`);

ALTER TABLE `card_order` ADD FOREIGN KEY (`list_id`) REFERENCES `buy_list` (`id`);

ALTER TABLE `card_order` ADD FOREIGN KEY (`card_id`) REFERENCES `card` (`id`);

ALTER TABLE `card_order` ADD FOREIGN KEY (`price_id`) REFERENCES `card_price` (`id`);

ALTER TABLE `trade_list` ADD FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);

ALTER TABLE `trade_list` ADD FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`);

ALTER TABLE `card_trade` ADD FOREIGN KEY (`list_id`) REFERENCES `trade_list` (`id`);

ALTER TABLE `card_trade` ADD FOREIGN KEY (`card_id`) REFERENCES `card` (`id`);

ALTER TABLE `card_trade` ADD FOREIGN KEY (`price_id`) REFERENCES `card_price` (`id`);

ALTER TABLE `card_price` ADD FOREIGN KEY (`card_id`) REFERENCES `card` (`id`);

ALTER TABLE `card_inventory` ADD FOREIGN KEY (`card_id`) REFERENCES `card` (`id`);
