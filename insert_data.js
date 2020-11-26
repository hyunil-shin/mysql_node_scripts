// https://github.com/mysqljs/mysql

const args = process.argv;
const ip = args[2];
const port = args[3];
const user = args[4];
const pw = args[5];
const iter = args[6];

console.log("insert data")

var mysql      = require('mysql');
var connection = mysql.createConnection({
  	host: ip,
	port: port,
	user: user,
	password: pw,
	database: 'hello',
	multipleStatements: true
});

connection.connect();
var fs = require('fs');
var forEach = require('async-foreach').forEach;

var fruits = [];
for(var i = 0; i < iter; i++) {
	fruits.push("data_big.sql");		// file size: 68MB
}

var sqlinfo = fs.readFileSync("./sql/data_big.sql");
var query = sqlinfo.toString();
forEach(fruits, function(item, index, arr) {
	
	connection.query(query,function (err, rows, fields) {
	    if(err){
		    console.log("error: " , err.sqlMessage);
                    console.log(err);
		    connection.end();
		    process.exit(100);	
		}else {
			console.log('insert data: %d / %d', index, iter);
			console.log("create right : " , rows);
		}
        
	});

});


connection.end();
