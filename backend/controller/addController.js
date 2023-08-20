const mysql = require('mysql');
const pool = mysql.createPool({
  connectionlimit: 10,
  connectionTimeout: 20,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_data',
});
exports.addNewData = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      throw err;
    } else {
      const params = req.body;
      connection.query(`INSERT INTO member SET ?`, params, (err, rows) => {
        connection.release();
        if (!err) {
          res.json(`${params.name} was already added `);
        } else {
          console.log(err);
        }
      });
    }
  });
};
