const express = require('express');
const { editDataById } = require('../controllers/editController');
const router = express.Router();

router.put('/update/:id', editDataById);

module.exports = router;
