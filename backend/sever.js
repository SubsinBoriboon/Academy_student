const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;
const getAllData = require('./routes/getData');
const deleteIdData = require('./routes/deleteData');
const addnewData = require('./routes/addData');
const getDataById = require('./routes/getData');
const editDataById = require('./routes/editData');
app.use(express.static('public'));

app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', getAllData);
app.use('/api', deleteIdData);
app.use('/api', addnewData);
app.use('/api', getDataById);
app.use('/api', editDataById);

app.listen(port, () => {
  console.log('connect port 8000 success');
});
