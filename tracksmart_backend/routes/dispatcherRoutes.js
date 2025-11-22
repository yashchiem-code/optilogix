// Mock Dispatcher Routes for Demo
const express = require('express');
const router = express.Router();

// Mock data
let docks = [
    { id: 1, name: 'Dock A', status: 'available', currentTruck: null },
    { id: 2, name: 'Dock B', status: 'occupied', currentTruck: 'TRK-001' },
    { id: 3, name: 'Dock C', status: 'available', currentTruck: null },
    { id: 4, name: 'Dock D', status: 'maintenance', currentTruck: null },
];

let truckQueue = [
    { id: 'TRK-003', supplier: 'ABC Logistics', arrivalTime: new Date().toISOString(), status: 'waiting' },
    { id: 'TRK-004', supplier: 'XYZ Transport', arrivalTime: new Date(Date.now() + 30 * 60000).toISOString(), status: 'scheduled' },
];

let appointments = [
    {
        id: 1,
        truckId: 'TRK-001',
        supplier: 'ABC Logistics',
        scheduledTime: new Date().toISOString(),
        status: 'in_progress',
        dockId: 2
    },
    {
        id: 2,
        truckId: 'TRK-003',
        supplier: 'ABC Logistics',
        scheduledTime: new Date().toISOString(),
        status: 'waiting',
        dockId: null
    },
];

// Get dock status
router.get('/dock-status', (req, res) => {
    res.json(docks);
});

// Get truck queue
router.get('/truck-queue', (req, res) => {
    res.json(truckQueue);
});

// Get appointments
router.get('/appointments', (req, res) => {
    const { truckId } = req.query;
    if (truckId) {
        const filtered = appointments.filter(a => a.truckId === truckId);
        return res.json(filtered);
    }
    res.json(appointments);
});

// Get recent assignments
router.get('/recent-assignments', (req, res) => {
    const recent = appointments.filter(a => a.status === 'in_progress' || a.status === 'completed');
    res.json(recent);
});

// Assign truck to dock
router.post('/assign', (req, res) => {
    const { truckId, dockId, appointmentId } = req.body;

    // Update dock
    const dock = docks.find(d => d.id === dockId);
    if (dock) {
        dock.status = 'occupied';
        dock.currentTruck = truckId;
    }

    // Update appointment
    const appointment = appointments.find(a => a.id === appointmentId);
    if (appointment) {
        appointment.status = 'in_progress';
        appointment.dockId = dockId;
    }

    // Remove from queue
    truckQueue = truckQueue.filter(t => t.id !== truckId);

    res.json({ success: true, message: 'Truck assigned to dock' });
});

module.exports = router;
