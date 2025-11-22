// Mock Trucks Routes for Demo
const express = require('express');
const router = express.Router();

// Mark truck as arrived
router.post('/arrive', (req, res) => {
    const { truckId, appointmentId } = req.body;
    console.log(`Truck ${truckId} arrived for appointment ${appointmentId}`);
    res.json({ success: true, message: 'Truck marked as arrived' });
});

// Mark truck as departed
router.post('/depart', (req, res) => {
    const { truckId } = req.body;
    console.log(`Truck ${truckId} departed`);
    res.json({ success: true, message: 'Truck departed' });
});

module.exports = router;
