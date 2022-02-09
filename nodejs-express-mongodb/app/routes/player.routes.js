const express = require('express');
const router = express.Router();

const playerCtrl = require ('../controllers/player.controller');

router.post('/api/player', playerCtrl.create);
// router.get('/api/player', playerCtrl.getPlayers);

module.exports = router;