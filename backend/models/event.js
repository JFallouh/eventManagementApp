// Created by James FALLOUH 6171620

import mongoose from 'mongoose';

/**
 * Event Schema for the Event Management Application.
 * This file defines the schema for events and creates a Mongoose model.
 */

const eventSchema = new mongoose.Schema({
    _id: Number, // Use Number type for the _id field to support integer IDs
    eventName: String, // Name of the event
    eventDate: String, // Date of the event
    eventAssigned: String // Person assigned to the event
});

// Create the Event model using the eventSchema
const Event = mongoose.model('Event', eventSchema);

export default Event; // Export the Event model