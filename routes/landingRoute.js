const express = require("express");
const router = express.Router();
const { stateCoordinates } = require('../data/stateCoordinates');

/**
 * Landing Page
 * GET /
 */
router.get('/', (req, res) => {
  res.render('landing', { stateCoordinates });
});

module.exports = router;