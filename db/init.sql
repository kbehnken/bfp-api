-- MySQL dump 10.16  Distrib 10.1.44-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: bfp_api
-- ------------------------------------------------------
-- Server version	10.1.44-MariaDB-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `address_id` int(11) NOT NULL AUTO_INCREMENT,
  `street_address` varchar(70) NOT NULL,
  `city` varchar(40) NOT NULL,
  `state` varchar(40) NOT NULL,
  `postal_code` varchar(10) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `vendor_id` int(11) DEFAULT NULL,
  `map_url` varchar(70) DEFAULT NULL,
  `photo_url` varchar(70) DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `assets`
--

DROP TABLE IF EXISTS `assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assets` (
  `asset_id` int(11) NOT NULL AUTO_INCREMENT,
  `make` varchar(70) NOT NULL,
  `model` varchar(70) NOT NULL,
  `category` varchar(70) NOT NULL,
  `notes` text,
  PRIMARY KEY (`asset_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `assets_to_addresses`
--

DROP TABLE IF EXISTS `assets_to_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assets_to_addresses` (
  `asset_id` int(11) NOT NULL,
  `address_id` int(11) NOT NULL,
  PRIMARY KEY (`asset_id`,`address_id`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `assets_to_addresses_ibfk_1` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`asset_id`),
  CONSTRAINT `assets_to_addresses_ibfk_2` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(40) NOT NULL,
  `phone_number` varchar(40) DEFAULT NULL,
  `email_address` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photos` (
  `photo_id` int(11) NOT NULL AUTO_INCREMENT,
  `date_taken` varchar(40) DEFAULT NULL,
  `category` varchar(40) DEFAULT NULL,
  `photo_url` varchar(70) DEFAULT NULL,
  `service_call_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`photo_id`),
  KEY `service_call_id` (`service_call_id`),
  CONSTRAINT `photos_ibfk_1` FOREIGN KEY (`service_call_id`) REFERENCES `service_calls` (`service_call_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `service_calls`
--

DROP TABLE IF EXISTS `service_calls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service_calls` (
  `service_call_id` int(11) NOT NULL AUTO_INCREMENT,
  `start_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `end_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_id` int(11) DEFAULT NULL,
  `salt` float DEFAULT NULL,
  `phosphates` float DEFAULT NULL,
  `tds` float DEFAULT NULL,
  `filter_psi` float DEFAULT NULL,
  `chlorine` float DEFAULT NULL,
  `ph` float DEFAULT NULL,
  `alkalinity` float DEFAULT NULL,
  `cya` float DEFAULT NULL,
  `trichlor_shock` float DEFAULT NULL,
  `soda_ash` float DEFAULT NULL,
  `sodium_bicarbonate` float DEFAULT NULL,
  `tabs` int(11) DEFAULT NULL,
  `granular_trichlor` float DEFAULT NULL,
  `phosphate_remover` float DEFAULT NULL,
  `muriatic_acid` float DEFAULT NULL,
  `sodium_thiosulfate` float DEFAULT NULL,
  `stabilizer` float DEFAULT NULL,
  `green_to_clean` float DEFAULT NULL,
  `de` float DEFAULT NULL,
  `address_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`service_call_id`),
  KEY `user_id` (`user_id`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `service_calls_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `service_calls_ibfk_2` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `services` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(70) NOT NULL,
  `description` text,
  PRIMARY KEY (`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `services_to_service_calls`
--

DROP TABLE IF EXISTS `services_to_service_calls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `services_to_service_calls` (
  `service_id` int(11) NOT NULL,
  `service_call_id` int(11) NOT NULL,
  PRIMARY KEY (`service_id`,`service_call_id`),
  KEY `service_call_id` (`service_call_id`),
  CONSTRAINT `services_to_service_calls_ibfk_1` FOREIGN KEY (`service_id`) REFERENCES `services` (`service_id`),
  CONSTRAINT `services_to_service_calls_ibfk_2` FOREIGN KEY (`service_call_id`) REFERENCES `service_calls` (`service_call_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `travel_events`
--

DROP TABLE IF EXISTS `travel_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `travel_events` (
  `travel_event_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `event_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `event_type` varchar(20) NOT NULL,
  `address_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`travel_event_id`),
  KEY `address_id` (`address_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `travel_events_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`address_id`),
  CONSTRAINT `travel_events_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `is_admin` tinyint(1) DEFAULT NULL,
  `user_role` varchar(40) NOT NULL,
  `first_name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `phone_number` varchar(40) DEFAULT NULL,
  `email_address` varchar(60) NOT NULL,
  `hash` text,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vendors`
--

DROP TABLE IF EXISTS `vendors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vendors` (
  `vendor_id` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_name` varchar(40) NOT NULL,
  `phone_number` varchar(40) DEFAULT NULL,
  `email_address` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`vendor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-17 14:31:10
