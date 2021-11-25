-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: 3309db
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary view structure for view `populartransactions`
--

DROP TABLE IF EXISTS `populartransactions`;
/*!50001 DROP VIEW IF EXISTS `populartransactions`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `populartransactions` AS SELECT 
 1 AS `Username`,
 1 AS `Address`,
 1 AS `Rating`,
 1 AS `TransDone`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `searchtools`
--

DROP TABLE IF EXISTS `searchtools`;
/*!50001 DROP VIEW IF EXISTS `searchtools`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `searchtools` AS SELECT 
 1 AS `toolName`,
 1 AS `toolType`,
 1 AS `Price`,
 1 AS `Username`,
 1 AS `Rating`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `userview`
--

DROP TABLE IF EXISTS `userview`;
/*!50001 DROP VIEW IF EXISTS `userview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `userview` AS SELECT 
 1 AS `UserID`,
 1 AS `Username`,
 1 AS `Address`,
 1 AS `Rating`,
 1 AS `TransDone`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `populartransactions`
--

/*!50001 DROP VIEW IF EXISTS `populartransactions`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `populartransactions` (`Username`,`Address`,`Rating`,`TransDone`) AS select `u`.`Username` AS `Username`,`u`.`Address` AS `Address`,`u`.`Rating` AS `Rating`,`u`.`TransDone` AS `TransDone` from (`users` `u` join `usertransactions` `ut` on((`u`.`UserID` = `ut`.`SellerID`))) order by `ut`.`TransactionDate`,`u`.`TransDone` limit 20 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `searchtools`
--

/*!50001 DROP VIEW IF EXISTS `searchtools`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `searchtools` (`toolName`,`toolType`,`Price`,`Username`,`Rating`) AS select `t`.`ToolName` AS `toolName`,`t`.`Price` AS `Price`,`t`.`ToolType` AS `toolType`,`u`.`Username` AS `Username`,`u`.`Rating` AS `Rating` from (`users` `u` join `tools` `t`) where (`u`.`UserID` = `t`.`UserID`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `userview`
--

/*!50001 DROP VIEW IF EXISTS `userview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `userview` AS select `users`.`UserID` AS `UserID`,`users`.`Username` AS `Username`,`users`.`Address` AS `Address`,`users`.`Rating` AS `Rating`,`users`.`TransDone` AS `TransDone` from `users` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-25 17:02:36
