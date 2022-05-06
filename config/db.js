var mysql = require('mysql'); 

var connection = mysql.createConnection({
host: 'localhost',
user: 'pi',
password: 'raspberry',
database: 'FinalExam',
});


connection.connect(function (error) {
if (!!error) {
console.log(error);
} else {
console.log('MySQL Database Connected..!');
}
});

module.exports = connection;





