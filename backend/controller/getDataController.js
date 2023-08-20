const mysql = require('mysql');
const pool = mysql.createPool({
  connectionlimit: 10,
  connectionTimeout: 20,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_data',
});
exports.getAllMember = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log(`Connect id:${connection.threadId} success`);
      connection.query('SELECT * FROM member', (err, rows) => {
        connection.release();
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
    }
  });
};
exports.getmemberById = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log('error :', err);
    } else {
      console.log('connected id :?', connection.threadId);
      connection.query(
        `SELECT * FROM member WHERE id = ${req.params.id}`,
        (err, rows) => {
          connection.release();
          if (!err) {
            res.json(rows);
          } else {
            console.log(err);
          }
        }
      );
    }
  });
};
