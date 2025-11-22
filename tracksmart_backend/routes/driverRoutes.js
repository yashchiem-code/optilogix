// Mock Driver Routes for Demo
const express = require('express');
const router = express.Router();

// Mock driver assignments
const mockAssignments = {
    'DRV-001': [
        {
            id: 1,
            truckId: 'TRK-001',
            dockId: 2,
            dockName: 'Dock B',
            status: 'in_progress',
            scheduledTime: new Date().toISOString(),
            supplier: 'ABC Logistics'
        }
    ],
    'DRV-002': [
        {
            id: 2,
            truckId: 'TRK-002',
            dockId: 1,
            dockName: 'Dock A',
            status: 'completed',
            scheduledTime: new Date(Date.now() - 60 * 60000).toISOString(),
            supplier: 'XYZ Transport'
        }
    ]
};

// Get driver assignments
router.get('/assignments/:driverId', (req, res) => {
    const { driverId } = req.params;
    const assignments = mockAssignments[driverId] || [];
    res.json(assignments);
});

module.exports = router;
