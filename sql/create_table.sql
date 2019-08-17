DROP TABLE IF EXISTS `hello`;

CREATE TABLE `hello` (
  `a` varchar(255) default NULL,
  `b` varchar(255),
  `c` varchar(255),
  `d` varchar(100) default NULL,
  `address` varchar(255) default NULL,
  `word` TEXT default NULL
);

INSERT INTO `hello` (`a`,`b`,`c`,`d`,`address`,`word`) VALUES ("Brady","Mon, 8th, 2018","Sociis Natoque Penatibus Institute","$00,000.00","P.O. Box 899, 7685 Sit St.","sem, vitae aliquam eros turpis non enim. Mauris quis turpis");
