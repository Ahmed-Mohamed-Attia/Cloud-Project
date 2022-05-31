-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 31, 2022 at 02:02 AM
-- Server version: 5.7.36
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cloud_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
CREATE TABLE IF NOT EXISTS `bill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`id`, `user_id`, `total_price`) VALUES
(1, 1, 50000);

-- --------------------------------------------------------

--
-- Table structure for table `bill_product`
--

DROP TABLE IF EXISTS `bill_product`;
CREATE TABLE IF NOT EXISTS `bill_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bill_id` int(11) NOT NULL,
  `pro_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `bill_id` (`bill_id`),
  KEY `pro_id` (`pro_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bill_product`
--

INSERT INTO `bill_product` (`id`, `bill_id`, `pro_id`) VALUES
(1, 1, 62),
(2, 1, 64),
(3, 1, 68);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `pro_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_fk` (`user_id`),
  KEY `pro_fk` (`pro_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `pro_id`) VALUES
(1, 1, 65),
(2, 1, 71),
(3, 1, 69);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(4, 'accessories'),
(3, 'consoles'),
(1, 'others'),
(2, 'processor');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `img` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text NOT NULL,
  `cat_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cat_id` (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `img`, `price`, `description`, `cat_id`) VALUES
(62, 'cooler 7000', './imgs/1.png', 200, 'lorem apso kkppok owheo he wheoihr ohwopkl w k k w ', 1),
(63, 'ryzen 1700', './imgs/2.png', 3000, 'lorem apso kkppok owheo he wheoihr ohwopkl w k k w ', 2),
(64, 'build 2021', './imgs/3.png', 25000, 'lorem apso kkppok owheo he wheoihr ohwopkl w k k w ', 3),
(65, 'headphones y7000', './imgs/4.png', 250, 'lorem apso kkppok owheo he wheoihr ohwopkl w k k w ', 4),
(66, 'Core i9', './imgs/5.png', 2000, 'lorem apso kkppok owheo he wheoihr ohwopkl w k k w ', 2),
(67, 'keyboard RGB', './imgs/6.png', 250, 'lorem apso kkppok owheo he wheoihr ohwopkl w k k w ', 4),
(68, 'build 2020', './imgs/7.png', 25000, 'lorem apso kkppok owheo he wheoihr ohwopkl w k k w ', 3),
(69, 'Playstations 5', './imgs/8.png', 20000, 'lorem apso kkppok owheo he wheoihr ohwopkl w k k w ', 3),
(70, 'Core i7', './imgs/9.png', 2500, 'lorem apso kkppok owheo he wheoihr ohwopkl w k k w ', 2),
(71, 'Core i5', './imgs/10.png', 3000, 'lorem apso kkppok owheo he wheoihr ohwopkl w k k w ', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(36) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(36) NOT NULL,
  `location` text NOT NULL,
  `phone` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `pass`, `location`, `phone`) VALUES
(1, 'hady', 'hady@gmail.com', '123', 'al hadra', 1234678),
(8, 'ama4', 'omar@omar.com', '123', '46 saeedelgendy st elhadra', 1254854455),
(9, 'omar', 'hadyhassn5@gmail.com', '123', '46 saeedelgendy st elhadra', 1254854455);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `bill_product`
--
ALTER TABLE `bill_product`
  ADD CONSTRAINT `bill_product_ibfk_1` FOREIGN KEY (`bill_id`) REFERENCES `bill` (`id`),
  ADD CONSTRAINT `bill_product_ibfk_2` FOREIGN KEY (`pro_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `pro_fk` FOREIGN KEY (`pro_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
