-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: easyshop
-- ------------------------------------------------------
-- Server version	5.7.9

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
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
  `id` int(11) NOT NULL,
  `address` varchar(45) NOT NULL,
  `zipcode` char(4) NOT NULL,
  `city` varchar(45) NOT NULL,
  `users_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`users_id`),
  KEY `fk_addresses_users_idx` (`users_id`),
  CONSTRAINT `fk_addresses_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credentials`
--

DROP TABLE IF EXISTS `credentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `credentials` (
  `id` int(11) NOT NULL,
  `password` varchar(200) NOT NULL,
  `accessToken` varchar(45) NOT NULL,
  `creationDate` datetime NOT NULL,
  `lastUpdated` datetime NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credentials`
--

LOCK TABLES `credentials` WRITE;
/*!40000 ALTER TABLE `credentials` DISABLE KEYS */;
/*!40000 ALTER TABLE `credentials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deliveries`
--

DROP TABLE IF EXISTS `deliveries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `deliveries` (
  `id` int(11) NOT NULL,
  `deliveryDate` datetime NOT NULL,
  `deliverer_id` int(11) NOT NULL,
  `orders_id` int(11) NOT NULL,
  `orders_addresses_id` int(11) NOT NULL,
  `applicant_id` int(11) NOT NULL,
  `orders_shops_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`deliverer_id`,`orders_id`,`orders_addresses_id`,`applicant_id`,`orders_shops_id`),
  KEY `fk_deliveries_users1_idx` (`deliverer_id`),
  KEY `fk_deliveries_orders1_idx` (`orders_id`,`orders_addresses_id`,`applicant_id`,`orders_shops_id`),
  CONSTRAINT `fk_deliveries_orders1` FOREIGN KEY (`orders_id`, `orders_addresses_id`, `applicant_id`, `orders_shops_id`) REFERENCES `orders` (`id`, `addresses_id`, `applicant_id`, `shops_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_deliveries_users1` FOREIGN KEY (`deliverer_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deliveries`
--

LOCK TABLES `deliveries` WRITE;
/*!40000 ALTER TABLE `deliveries` DISABLE KEYS */;
/*!40000 ALTER TABLE `deliveries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `creationDate` datetime NOT NULL,
  `completed` tinyint(1) NOT NULL,
  `available` tinyint(1) NOT NULL,
  `expiryDate` datetime NOT NULL,
  `paid` tinyint(1) NOT NULL,
  `addresses_id` int(11) NOT NULL,
  `applicant_id` int(11) NOT NULL,
  `shops_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`addresses_id`,`applicant_id`,`shops_id`),
  KEY `fk_orders_addresses1_idx` (`addresses_id`,`applicant_id`),
  KEY `fk_orders_shops1_idx` (`shops_id`),
  CONSTRAINT `fk_orders_addresses1` FOREIGN KEY (`addresses_id`, `applicant_id`) REFERENCES `addresses` (`id`, `users_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_shops1` FOREIGN KEY (`shops_id`) REFERENCES `shops` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_has_products`
--

DROP TABLE IF EXISTS `orders_has_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders_has_products` (
  `orders_id` int(11) NOT NULL,
  `products_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  PRIMARY KEY (`orders_id`,`products_id`),
  KEY `fk_orders_has_products_products1_idx` (`products_id`),
  KEY `fk_orders_has_products_orders1_idx` (`orders_id`),
  CONSTRAINT `fk_orders_has_products_orders1` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_has_products_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_has_products`
--

LOCK TABLES `orders_has_products` WRITE;
/*!40000 ALTER TABLE `orders_has_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders_has_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` double NOT NULL,
  `available` tinyint(1) NOT NULL,
  `category` varchar(45) NOT NULL,
  `shops_id` int(11) NOT NULL,
  `description` varchar(300) NOT NULL,
  `price_per_kg` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`,`shops_id`),
  KEY `fk_products_shops1_idx` (`shops_id`),
  CONSTRAINT `fk_products_shops1` FOREIGN KEY (`shops_id`) REFERENCES `shops` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `review` varchar(500) NOT NULL,
  `rating` tinyint(10) NOT NULL,
  `deliveries_id` int(11) NOT NULL,
  `deliveries_deliverer_id` int(11) NOT NULL,
  `deliveries_orders_id` int(11) NOT NULL,
  `deliveries_orders_addresses_id` int(11) NOT NULL,
  `deliveries_applicant_id` int(11) NOT NULL,
  `deliveries_orders_shops_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`deliveries_id`,`deliveries_deliverer_id`,`deliveries_orders_id`,`deliveries_orders_addresses_id`,`deliveries_applicant_id`,`deliveries_orders_shops_id`),
  KEY `fk_reviews_deliveries1_idx` (`deliveries_id`,`deliveries_deliverer_id`,`deliveries_orders_id`,`deliveries_orders_addresses_id`,`deliveries_applicant_id`,`deliveries_orders_shops_id`),
  CONSTRAINT `fk_reviews_deliveries1` FOREIGN KEY (`deliveries_id`, `deliveries_deliverer_id`, `deliveries_orders_id`, `deliveries_orders_addresses_id`, `deliveries_applicant_id`, `deliveries_orders_shops_id`) REFERENCES `deliveries` (`id`, `deliverer_id`, `orders_id`, `orders_addresses_id`, `applicant_id`, `orders_shops_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shops`
--

DROP TABLE IF EXISTS `shops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shops` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `zipcode` char(4) NOT NULL,
  `city` varchar(45) NOT NULL,
  `website` varchar(45) DEFAULT NULL,
  `phoneNumber` varchar(45) NOT NULL,
  `credentials_id` int(11) NOT NULL,
  `acceptedVendor` tinyint(1) NOT NULL,
  `types_id` int(11) NOT NULL,
  `imageName` varchar(45) DEFAULT NULL,
  `imagePath` varchar(200) NOT NULL,
  PRIMARY KEY (`id`,`credentials_id`,`types_id`),
  KEY `fk_shops_credentials1_idx` (`credentials_id`),
  KEY `fk_shops_types1_idx` (`types_id`),
  CONSTRAINT `fk_shops_credentials1` FOREIGN KEY (`credentials_id`) REFERENCES `credentials` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_shops_types1` FOREIGN KEY (`types_id`) REFERENCES `types` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shops`
--

LOCK TABLES `shops` WRITE;
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;
/*!40000 ALTER TABLE `shops` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phoneNumber` varchar(20) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `doesDelivery` tinyint(1) NOT NULL,
  `age` tinyint(120) NOT NULL,
  `activeProfile` tinyint(1) NOT NULL,
  `credentials_id` int(11) NOT NULL,
  `imageName` varchar(45) DEFAULT NULL,
  `imagePath` varchar(200) NOT NULL,
  PRIMARY KEY (`id`,`credentials_id`),
  KEY `fk_users_credentials1_idx` (`credentials_id`),
  CONSTRAINT `fk_users_credentials1` FOREIGN KEY (`credentials_id`) REFERENCES `credentials` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-29 14:18:58
