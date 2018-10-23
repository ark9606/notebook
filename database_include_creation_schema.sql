CREATE DATABASE  IF NOT EXISTS `notebook` /*!40100 DEFAULT CHARACTER SET utf16 */;
USE `notebook`;
-- MySQL dump 10.13  Distrib 5.7.23, for Win64 (x86_64)
--
-- Host: localhost    Database: notebook
-- ------------------------------------------------------
-- Server version	5.7.23-log

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
-- Table structure for table `records`
--

DROP TABLE IF EXISTS `records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `records` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf16;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `records`
--

LOCK TABLES `records` WRITE;
/*!40000 ALTER TABLE `records` DISABLE KEYS */;
INSERT INTO `records` VALUES (12,'Гусько Филип Александрович','0976788234','faraon@gmail.com','2018-10-21 18:20:17','2018-10-21 18:20:17'),(13,'Пеник Валера Пантелеймонович','0965833455','panteleimon@rambler.ru','2018-10-21 18:21:23','2018-10-21 18:21:23'),(14,'Петрова Мила Геннадиевна','0986756567','mila@mail.ru','2018-10-21 18:22:00','2018-10-21 18:22:00'),(15,'Сирийская Оксана Владимировна','0987645678','siri@i.ua','2018-10-21 18:22:52','2018-10-21 18:22:52'),(16,'Иванова Роксолана Петровна','0965677432','roksolana96@gmail.com','2018-10-21 18:23:44','2018-10-21 18:23:44'),(17,'Кивильская Марина Федоровна','0968954660','kivi@yandex.ru','2018-10-21 18:24:38','2018-10-21 18:24:38'),(18,'Шалацкий Леонид Петрович','0986756432','leonid88@gmail.com','2018-10-21 18:25:41','2018-10-21 18:25:41'),(19,'Навальский Игнат Юриевич','0935678543','ignat07.08.1998@mail.ru','2018-10-21 18:26:55','2018-10-21 18:26:55'),(20,'Панкейкович Валериан Николаевский','0508790890','valeriivanov@rambler.ru','2018-10-21 18:27:44','2018-10-21 18:29:58'),(21,'Метько Петр Первый','0971431411','perviy@gmail.com','2018-10-21 18:28:45','2018-10-21 18:28:45');
/*!40000 ALTER TABLE `records` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-21 21:33:35
