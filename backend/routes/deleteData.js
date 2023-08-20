const express = require('express');
const router = express.Router();
const { deleteById } = require('../controllers/deleteDataController');
router.delete('/delete/:id', deleteById);
module.exports = router;
