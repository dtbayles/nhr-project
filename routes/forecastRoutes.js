const express = require('express');
const {get} = require("axios");
const router = express.Router();
const { stateCoordinates } = require('../data/stateCoordinates');

/**
 * Returns weather forecast data for a given US state code
 * GET /forecast?State=XX
 */
router.get('/forecast', async (req, res) => {
  const stateCode = req.query.state;

  if (!stateCode || !stateCoordinates[stateCode]) {
    res.status(400).send('Valid state code is required');
    return;
  }

  const { lat, lon } = stateCoordinates[stateCode];
  console.log(`Fetching weather forecast for ${stateCode} at (${lat}, ${lon})`);

  try {
    const pointsUrl = `https://api.weather.gov/points/${lat},${lon}`;
    const pointsResponse = await get(pointsUrl);
    console.log(`Successfully fetched weather forecast for ${stateCode} at (${lat}, ${lon})`);
    const prettifiedJson = JSON.stringify(pointsResponse.data, null, 2);

    res.setHeader('Content-Type', 'application/json');
    res.send(prettifiedJson);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to fetch weather data');
  }
});

module.exports = router;