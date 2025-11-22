// Mock Appointments Routes for Demo
const express = require('express');
const router = express.Router();

let appointments = [];
let appointmentIdCounter = 1;

// Book appointment
router.post('/book', (req, res) => {
    const { truckId, supplier, scheduledTime } = req.body;

    const newAppointment = {
        id: appointmentIdCounter++,
        truckId,
        supplier,
        scheduledTime: scheduledTime || new Date().toISOString(),
        status: 'scheduled',
        dockId: null
    };

    appointments.push(newAppointment);

    console.log(`Appointment booked for truck ${truckId}`);
    res.json({ success: true, appointment: newAppointment });
});

// Update assignment status
router.post('/update-status', (req, res) => {
    const { appointmentId, status } = req.body;

    const appointment = appointments.find(a => a.id === appointmentId);
    if (appointment) {
        appointment.status = status;
        res.json({ success: true, message: 'Status updated' });
    } else {
        res.status(404).json({ success: false, message: 'Appointment not found' });
    }
});

module.exports = router;
