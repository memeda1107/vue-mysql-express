/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 8.0.23 : Database - testproject
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`testproject` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `testproject`;

/*Table structure for table `testlist` */

DROP TABLE IF EXISTS `testlist`;

CREATE TABLE `testlist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `componeyName` longtext,
  `address` longtext CHARACTER SET utf8 COLLATE utf8_general_ci,
  `person` longtext,
  `remarks` longtext,
  `projectType` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8;

/*Data for the table `testlist` */

insert  into `testlist`(`id`,`componeyName`,`address`,`person`,`remarks`,`projectType`) values (46,'上饶市水利电力勘测设计院综合管理信息系统','$系统地址;http://8.129.146.84:9200/SRSD_OnePlatform/Login.aspx?Source=OneProjectSystem&ReturnUrl=http%3a%2f%2f8.129.146.84%3a9200%2fSRSD_Platform$门户地址;http://8.129.146.84:9200/SRSD_Platform/Portals$新增;http://8.129.146.84:9200/SRSD_Platform/Portals','黄银凤',NULL,'综合管理系统'),(56,'海南电力设计院','$财务管理系统;http://10.196.85.88:9100/HNED_OnePlatform/Login.aspx?Source=HN_FMS&ReturnUrl=http%3a%2f%2f10.196.85.88%3a9100%2fHNFMS_OneProjectSystem$项目管理系统;http://10.196.85.88:9100/HNED_OnePlatform/Login.aspx?Source=HaiNanMIS&ReturnUrl=http%3a%2f%2f10.196.85.88%3a9100%2fHaiNanMIS%2fDefault.aspx$移动后台地址;http://10.196.85.88:9100/HNED_OnePlatform/Login.aspx?Source=HNFMS_Mobile&ReturnUrl=http%3a%2f%2f10.196.85.88%3a9101%2fHNFMS_Mobile$账户系统;http://10.196.85.88:9100/HNED_OnePlatform/Login.aspx?Source=HNFMS_Mobile&ReturnUrl=http%3a%2f%2f10.196.85.88%3a9101%2fHNFMS_Mobile','韦金节','11111','综合管理系统'),(57,'广西院知识管理系统','$院企业云盘;http://10.196.85.162:9301/index.html#/login','韦金节','3333','广西院系统'),(70,'院主营系统前台驾驶舱系统地址','$院主营系统前台驾驶舱系统地址;http://10.196.85.162:8007/OnePlatform/Login.aspx?Source=GXED_DAS&ReturnUrl=http%3a%2f%2f10.196.85.88%3a9100%2fGXED_DAS','彭慧','无','广西院系统'),(71,'能建规划设计集团三重一大系统','$系统地址;https://10.196.85.88:4431/CPECC_MIDR/','彭慧、韦金节','新添加的0315','办公和网站'),(72,'宁夏电力设计院成品校审系统','$宁夏电力设计院成品校审系统;http://10.196.85.88:9200/NEPDI_OnePlatform/Login.aspx?Action=Login&ReturnUrl=http%3a%2f%2f10.196.85.88%3a9200%2fNEPDI_FPPS','黄银凤','测试项目','图档系统'),(73,'江门电力设计院有限公司数字档案馆系统','$江门电力设计院有限公司数字档案馆系统;http://8.129.146.84:9200/JM_OnePlatform/Login.aspx','黄银凤','备注什么','图档系统');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
