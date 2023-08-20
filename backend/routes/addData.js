const express = require('express');
const { addNewData } = require('../controllers/addController');
const router = express.Router();

router.post('/additem', addNewData);
module.exports = router;
