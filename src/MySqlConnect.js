// Connects to MySQL Database

function connection() {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "udigproduction.cluster-c2bdujgbmyqc.us-east-1.rds.amazonaws.com",
        user: "dash_user",
        password: "L3tM3S33"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
}

export default connection;