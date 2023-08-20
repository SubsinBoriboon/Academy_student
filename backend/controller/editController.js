const mysql = require('mysql');
const pool = mysql.createPool({
  connectionlimit: 10,
  connectionTimeout: 20,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_data',
});
exports.editDataById = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      throw err;
    } else {
      console.log('connect pool');
      const id = req.params.id;
      connection.query(
        'UPDATE `member` SET `name`=?,`surname` =?,`nickname` =?,`contact` =? WHERE id =?',
        [
          req.body.name,
          req.body.surname,
          req.body.nickname,
          req.body.contact,
          id,
        ],
        (err, rows) => {
          connection.release();
          if (!err) {
            res.json({ message: 'Update is Success' });
          } else {
            console.log('Error', err);
          }
        }
      );
    }
  });
};
