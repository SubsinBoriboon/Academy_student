const express = require('express');
const router = express.Router();
const {
  getAllMember,
  getmemberById,
} = require('../controllers/getDataController');

router.get('/member', getAllMember);
router.get('/member/:id', getmemberById);

module.exports = router;
