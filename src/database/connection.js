const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "root",
    database: "sims_todo"
  });

  dbConnection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('Connect DB successfully');
  });
  
module.exports = dbConnection;
