const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
//const healthMetricsController = require('../controllers/healthMetricsController');
//const healthCommunityController = require('../controllers/healthCommunityController');
//const authMiddleware = require('../middleware/authMiddleware');

// Public routes (no authentication required)
router.get('/doctors', doctorController.getDoctors);
//router.get('/health-metrics', healthMetricsController.getHealthMetrics);

// Private routes (authentication required)
//router.use(authMiddleware);
//router.post('/health-metrics', healthMetricsController.addHealthMetric);
//router.post('/support-groups/:id/join', healthCommunityController.joinSupportGroup);

module.exports = router;
