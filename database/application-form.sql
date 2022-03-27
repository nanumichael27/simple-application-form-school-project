-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2022 at 06:18 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `application-form`
--

-- --------------------------------------------------------

--
-- Table structure for table `formdata`
--

CREATE TABLE `formdata` (
  `id` int(11) NOT NULL,
  `firstname` varchar(75) NOT NULL,
  `middlename` varchar(75) NOT NULL,
  `lastname` varchar(75) NOT NULL,
  `matriculationNumber` varchar(255) DEFAULT NULL,
  `department` varchar(75) NOT NULL,
  `program` varchar(75) NOT NULL,
  `level` varchar(20) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `formdata`
--

INSERT INTO `formdata` (`id`, `firstname`, `middlename`, `lastname`, `matriculationNumber`, `department`, `program`, `level`, `gender`, `address`, `email`) VALUES
(1, 'Emus', 'Pius', 'Henry', '12/IMSU/396', 'Humanities', 'Philosophy', '5', 'Male', 'Warri', 'muraye@example.com'),
(2, 'Oghenerukevwe', 'Pius', 'Emuraye', '13245', 'Electrical Engineering', 'HND', 'Level', 'male', '3 Jesus Close, Off Adjomo Avenue, Ugborikoko.', 'oemuraye@gmail.com'),
(3, 'Oghenerukevwe', 'Pius', 'Emuraye', '2345', 'Accounting', 'OND', '1.1', 'male', '3 Jesus Close, Off Adjomo Avenue, Ugborikoko.', 'oemuraye@gmail.com'),
(4, 'Oghenerukevwe', 'Pius', 'Emuraye', '654', 'select department', 'OND', '2.1', 'female', '3 Jesus Close, Off Adjomo Avenue, Ugborikoko.', 'oemuraye@gmail.com'),
(5, 'rtfghkjk', 'fghjkl', 'fhgjkl', 'fghjkl', 'Accounting', 'OND', '2.1', 'male', '3 Jesus Close, Off Adjomo Avenue, Ugborikoko.', 'oemuraye@gmail.com'),
(6, 'Oghenerukevwe', 'Pius', 'Emuraye', '21345', 'Mass Communication', 'HND', '1.2', 'female', '3 Jesus Close, Off Adjomo Avenue, Ugborikoko.', 'oemuraye@gmail.com'),
(7, 'Oghenerukevwe', 'Pius', 'Emuraye', 'w3456', 'Electrical Engineering', 'HND', '1.2', 'female', '3 Jesus Close, Off Adjomo Avenue, Ugborikoko.', 'oemuraye@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `formdata`
--
ALTER TABLE `formdata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `formdata`
--
ALTER TABLE `formdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
