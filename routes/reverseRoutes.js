const express = require('express');
const router = express.Router();

/**
 * Endpoint to display reverse functionality
 * GET /reverse
 */
router.get('/reverse', (req, res) => {
  res.render('reverse');
});

/**
 * Endpoint for handling reverse functionality
 * POST /reverse
 */
router.post('/reverse', (req, res) => {
  const requestBody = req.body;
  let reversedData = {};

  for (const [key, value] of Object.entries(requestBody)) {
    const reversedKey = key.split('').reverse().join('');
    const reversedValue = value.split('').reverse().join('');
    reversedData[reversedKey] = reversedValue;
  }

  res.json(reversedData);
});

module.exports = router;