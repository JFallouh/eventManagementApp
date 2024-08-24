// Created by James FALLOUH 6171620

import express from 'express';
import Event from '../models/event.js'; // Import the Event model it is important to add the .js extension

/**
 * Event Routes for the Event Management Application.
 * This file defines the routes for handling event-related API requests.
 */

const router = express.Router(); // Create an instance of Express router
let currentId = 0; // Initialize with the last used ID

// Route to get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find(); // Fetch all events from the database
        // Update currentId to be the maximum _id in the existing events
        currentId = events.reduce((maxId, event) => Math.max(maxId, event._id), 0);
        res.json(events); // Respond with the fetched events
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle any errors
    }
});

// Route to add a new event
router.post('/', async (req, res) => {
    try {
        currentId += 1; // Increment the currentId
        const newEvent = new Event({ _id: currentId, ...req.body }); // Create a new event with an incremented _id
        await newEvent.save(); // Save the new event to the database
        res.json(newEvent); // Respond with the saved event
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle any errors
    }
});

// Route to delete an event by ID
router.delete('/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id); // Find and delete the event by ID
        if (!event) return res.status(404).json({ message: 'Event not found' }); // If no event is found, respond with 404
        res.json({ message: 'Event deleted' }); // Respond with a success message
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle any errors
    }
});

export default router; // Export the router