// Mock Dispatcher Routes for Demo
const express = require('express');
const router = express.Router();

// Mock data with proper structure matching frontend interfaces
let docks = [
    {
        id: 1,
        name: 'Dock A',
        status: 'available',
        currentTruck: null,
        assignedTime: null,
        type: 'loading'
    },
    {
        id: 2,
        name: 'Dock B',
        status: 'occupied',
        currentTruck: 'TRK-001',
        assignedTime: new Date().toISOString(),
        type: 'unloading'
    },
    {
        id: 3,
        name: 'Dock C',
        status: 'available',
        currentTruck: null,
        assignedTime: null,
        type: 'loading'
    },
    {
        id: 4,
        name: 'Dock D',
        status: 'maintenance',
        currentTruck: null,
        assignedTime: null,
        type: 'priority'
    },
];

let truckQueue = [
    {
        truckId: 'TRK-003',
        arrivalTime: new Date().toISOString(),
        appointmentId: 2
    },
    {
        truckId: 'TRK-004',
        arrivalTime: new Date(Date.now() + 30 * 60000).toISOString(),
        appointmentId: 3
    },
];

let appointments = [
    {
        id: 1,
        truckId: 'TRK-001',
        supplier: 'ABC Logistics',
        scheduledTime: new Date().toISOString(),
        status: 'loading/unloading',
        dockId: 2,
        actualArrivalTime: new Date().toISOString(),
        loadingStartTime: new Date().toISOString(),
        loadingEndTime: null,
        departureTime: null,
        type: 'unloading',
        assignedTime: new Date().toISOString(),
        appointmentId: 1
    },
    {
        id: 2,
        truckId: 'TRK-003',
        supplier: 'ABC Logistics',
        scheduledTime: new Date().toISOString(),
        status: 'arrived',
        dockId: null,
        actualArrivalTime: new Date().toISOString(),
        loadingStartTime: null,
        loadingEndTime: null,
        departureTime: null,
        type: 'loading',
        assignedTime: null,
        appointmentId: 2
    },
    {
        id: 3,
        truckId: 'TRK-004',
        supplier: 'XYZ Transport',
        scheduledTime: new Date(Date.now() + 30 * 60000).toISOString(),
        status: 'booked',
        dockId: null,
        actualArrivalTime: null,
        loadingStartTime: null,
        loadingEndTime: null,
        departureTime: null,
        type: 'loading',
        assignedTime: null,
        appointmentId: 3
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
    const recent = appointments.filter(a => a.status === 'loading/unloading' || a.status === 'completed');
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
        dock.assignedTime = new Date().toISOString();
    }

    // Update appointment
    const appointment = appointments.find(a => a.id === appointmentId);
    if (appointment) {
        appointment.status = 'loading/unloading';
        appointment.dockId = dockId;
        appointment.assignedTime = new Date().toISOString();
        appointment.loadingStartTime = new Date().toISOString();
    }

    // Remove from queue
    truckQueue = truckQueue.filter(t => t.truckId !== truckId);

    res.json({ success: true, message: 'Truck assigned to dock' });
});

module.exports = router;
