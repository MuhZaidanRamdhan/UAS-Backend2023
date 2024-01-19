-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2024 at 07:14 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_covid_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` text NOT NULL,
  `status` enum('positive','recovered','dead') NOT NULL,
  `in_date_at` date NOT NULL,
  `out_date_at` date NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `name`, `phone`, `address`, `status`, `in_date_at`, `out_date_at`, `timestamp`) VALUES
(1, 'zaidan', '085719404786', 'bekasi', 'recovered', '2024-01-19', '2024-01-20', '2024-01-19 02:25:40'),
(2, 'padil', '085719901991', 'tanggerang', 'dead', '2024-01-01', '2024-01-10', '2024-01-19 05:58:46'),
(4, 'tabe', '0211323232', 'depok', 'dead', '2023-11-05', '2024-01-08', '2024-01-19 02:26:44'),
(5, 'mochi', '02101103304', 'bekasi', 'dead', '2023-12-05', '2024-01-01', '2024-01-19 05:58:41'),
(6, 'abu', '021011033444', 'bekasi', 'dead', '2023-12-22', '2024-01-03', '2024-01-19 05:58:07'),
(7, 'wolly', '021011033444', 'bekasi', 'positive', '2023-12-22', '2024-01-03', '2024-01-19 06:08:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
