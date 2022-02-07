const express = require('express');
const router = express.Router();

const playerCtrl = require ('../controllers/tutorial.controller');

router.post('/api/player', playerCtrl.create)

module.exports = router;