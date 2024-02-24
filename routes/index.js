const express = require('express');
const router = express.Router();

const landingRoute = require('./landingRoute');
const fibonacciRoutes = require('./fibonacciRoutes');
const forecastRoutes = require('./forecastRoutes');
const reverseRoutes = require('./reverseRoutes');

router.use(landingRoute);
router.use(fibonacciRoutes);
router.use(forecastRoutes);
router.use(reverseRoutes);

module.exports = router;
