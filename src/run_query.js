// https://github.com/mysqljs/mysql

const args = process.argv;
const ip = args[2];
const port = args[3];
const user = args[4];
const pw = args[5];
const db_name = args[6]
const query = args[7];


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


connection.query(query, function (err, rows, fields) {
    if(err){
	    console.log("error: " , err);
	    connection.end();
	    process.exit(100);	
	}else {
		console.log("Data received from DB");
		console.log(rows);
		console.log("rows: ", rows.length);
	}
       
});




connection.end();
