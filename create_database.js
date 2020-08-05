// https://github.com/mysqljs/mysql

const args = process.argv;
const ip = args[2];
const port = args[3];
const user = args[4];
const pw = args[5];

console.log(ip);

var mysql      = require('mysql');
var connection = mysql.createConnection({
  	host: ip,
	port: port,
	user: user,
	password: pw,	
	multipleStatements: true
});

connection.connect();
var fs = require('fs');
var forEach = require('async-foreach').forEach;



forEach(["./sql/create_database.sql"], function(item, index, arr) {
	var sqlinfo = fs.readFileSync(item);
	var query = sqlinfo.toString();
	
	connection.query(query,function (err, rows, fields) {
	    if(err){
		    console.log(err);
		    console.log("query" , err.sqlMessage);
		    connection.end();
		    process.exit();	
		}else {
			console.log("create database : " , rows);
		}        
	});
});


connection.end();

console.log("database hello has been created.")
