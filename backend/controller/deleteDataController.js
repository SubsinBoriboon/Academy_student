const mysql = require('mysql');
const pool = mysql.createPool({
  connectionlimit: 10,
  connectionTimeout: 20,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_data',
});
exports.deleteById = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      throw err;
    } else {
      console.log('connection id : ?', connection.threadId);
      connection.query(
        'DELETE FROM `member` WHERE `id` = ?',
        [req.params.id],
        (err, rows) => {
          connection.release();
          if (!err) {
            res.json({ message: 'Delete Success' });
          } else {
            console.log(err);
          }
        }
      );
    }
  });
};
