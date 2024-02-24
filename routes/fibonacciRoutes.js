const express = require('express');
const router = express.Router();
const { generateFibonacci } = require('../utils/fibonacci');

/**
 * Endpoint to display Fibonacci Sequence
 * GET /fibonacci
 */
router.get('/fibonacci', (req, res) => {
  const sequence = generateFibonacci(10);
  res.render('fibonacci', { sequence });
});

/**
 * Endpoint to display Fibonacci Sequence based on user input
 * POST /fibonacci
 */
router.post('/fibonacci', (req, res) => {
  const count = parseInt(req.body.count, 10);
  if (!isNaN(count) && count > 0) {
    const sequence = generateFibonacci(count);
    console.log(`Generated sequence: ${sequence}`);
    res.render('fibonacci', { sequence });
  } else {
    console.error(`Invalid input: ${req.body.count}`);
    res.render('fibonacci', { sequence: null });
  }
});

module.exports = router;
