
const mysql = require('mysql');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'login_0118_omskrevet_eksempel'
});

connection.connect();

global.db = connection;
