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
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

/*Data for the table `testlist` */

insert  into `testlist`(`id`,`componeyName`,`address`,`person`,`remarks`,`projectType`) values (38,'广西鑫源电力勘察设计有限公司项目管理系统','$系统地址（admin/SCjszlb@57590）;http://8.129.146.84:9200/XYDL_OnePlatform/Login.aspx?Source=OneProjectSystem&ReturnUrl=http%3a%2f%2f8.129.146.84%3a9200%2fXYDL_Platform$账户地址;http://8.129.146.84:9200/XYDL_OnePlatform/Login.aspx?ReturnUrl=%2fXYDL_OnePlatform%2fAMS%2fDefault.aspx','韦金节',NULL,NULL),(40,'广东岭南设计院','$工程项目生产管理系统;http://10.196.85.93:8801/#/admin/home','黄银凤',NULL,NULL),(46,'上饶市水利电力勘测设计院综合管理信息系统','$系统地址;http://8.129.146.84:9200/SRSD_OnePlatform/Login.aspx?Source=OneProjectSystem&ReturnUrl=http%3a%2f%2f8.129.146.84%3a9200%2fSRSD_Platform$门户地址;http://8.129.146.84:9200/SRSD_Platform/Portals','韦金节',NULL,NULL),(49,'上饶市水利电力勘测设计院综合管理信息系统','$系统地址;http://10.196.85.88:9100/SRSD_OnePlatform/Login.aspx?Source=OneProjectSystem&ReturnUrl=http%3a%2f%2f10.196.85.88%3a9100%2fSRSD_Platform','韦金节','无','演示专用系统'),(56,'海南电力设计院','$财务管理系统;http://10.196.85.88:9100/HNED_OnePlatform/Login.aspx?Source=HN_FMS&ReturnUrl=http%3a%2f%2f10.196.85.88%3a9100%2fHNFMS_OneProjectSystem$项目管理系统;http://10.196.85.88:9100/HNED_OnePlatform/Login.aspx?Source=HaiNanMIS&ReturnUrl=http%3a%2f%2f10.196.85.88%3a9100%2fHaiNanMIS%2fDefault.aspx$移动后台地址;http://10.196.85.88:9100/HNED_OnePlatform/Login.aspx?Source=HNFMS_Mobile&ReturnUrl=http%3a%2f%2f10.196.85.88%3a9101%2fHNFMS_Mobile$账户系统;http://10.196.85.88:9100/HNED_OnePlatform/Login.aspx?Source=HNFMS_Mobile&ReturnUrl=http%3a%2f%2f10.196.85.88%3a9101%2fHNFMS_Mobile','韦金节','2222222222222222','综合管理系统'),(57,'广西院知识管理系统','$院企业云盘;http://10.196.85.162:9301/index.html#/login','彭慧','3333','广西院系统'),(70,'院主营系统前台驾驶舱系统地址','$院主营系统前台驾驶舱系统地址;http://10.196.85.162:8007/OnePlatform/Login.aspx?Source=GXED_DAS&ReturnUrl=http%3a%2f%2f10.196.85.88%3a9100%2fGXED_DAS','彭慧','无','广西院系统');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
