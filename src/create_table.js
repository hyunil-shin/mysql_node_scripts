// https://github.com/mysqljs/mysql

const args = process.argv;
const ip = args[2];
const port = args[3];
const user = args[4];
const pw = args[5];
const db_name = args[6]


var mysql      = require('mysql');
var connection = mysql.createConnection({
  	host: ip,
	port: port,
	user: user,
	password: pw,
	database: db_name,
	multipleStatements: true
});

connection.connect();
var fs = require('fs');
var forEach = require('async-foreach').forEach;


forEach(["./sql/create_table.sql"], function(item, index, arr) {
	var sqlinfo = fs.readFileSync(item);
	var query = sqlinfo.toString();
	
	connection.query(query,function (err, rows, fields) {
	    if(err){
		    console.log("query" , err.sqlMessage);
		    connection.end();
		    process.exit();	
		}else {
			console.log("create right : " , rows);
		}        
	});
});


connection.end();

console.log("table hello has been created.")