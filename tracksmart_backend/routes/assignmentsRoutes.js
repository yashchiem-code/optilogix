// Mock Assignments Routes for Demo
const express = require('express');
const router = express.Router();

// Update assignment status
router.post('/update-status', (req, res) => {
    const { appointmentId, status } = req.body;
    console.log(`Assignment ${appointmentId} status updated to ${status}`);
    res.json({ success: true, message: 'Assignment status updated' });
});

module.exports = router;
