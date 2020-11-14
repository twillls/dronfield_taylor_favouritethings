-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 14, 2020 at 11:22 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_favouritethings`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_things`
--

DROP TABLE IF EXISTS `tbl_things`;
CREATE TABLE IF NOT EXISTS `tbl_things` (
  `id` tinyint(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `info` text NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `rating` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf16;

--
-- Dumping data for table `tbl_things`
--

INSERT INTO `tbl_things` (`id`, `name`, `info`, `avatar`, `rating`) VALUES
(1, 'Coffee', 'Only the darkest and the hottest coffee shall suffice! It is my lifeline!', 'coffee.jpg', '100 pots of coffee out of 10'),
(2, 'David', 'My son. My pride and joy. He is not fat, he is fluffy.', 'david.jpg', '10 thousand cat nips out of 10'),
(3, 'Skateboarding', 'Cruisin\' for a bruisin\'! No broken bones.. yet.', 'skate.jpg', '10 kickflips out of 10');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
