const args = process.argv;
const ip = args[2];
const port = args[3];
const user = args[4];
const pw = args[5];

var mysql      = require('mysql');
var pool = mysql.createPool({	
  	host: ip,
	port: port,
	user: user,
	password: pw,
    multipleStatements : true,
    connectionLimit: 2,
});

 
   pool.getConnection(function(err, connection) {
    // Use the connection
	
	if ( err ) throw err;
	 else {
    connection.query( 'lock tables rds_maintenance.chk_masterha read;', function(err, rows) {
      // And done with the connection.
   
	connection.release();
	console.log('lock test');
      // Don't use the connection here, it has been returned to the pool.
    });
	}
  });
 
console.log("lock table")