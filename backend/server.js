// Created by James FALLOUH 6171620

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import eventRoutes from './routes/eventRoutes.js'; // Import event routes (Note the .js extension)



/**
 * Main server file for the Event Management Application.
 * This file sets up the Express server, connects to MongoDB,
 * and configures middleware and routes.
 */

const app = express(); // Create an instance of Express application
const port = 5001; // Define the port number where the server will listen

// Middleware configuration
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use(express.json()); // Parse incoming JSON requests and put the parsed data in req.body

// Connect to MongoDB
/*
the following code gave me a warning that is going to deprecated
(node:73936) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
(Use `node --trace-warnings ...` to show where the warning was created)
(node:73936) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version


mongoose.connect('mongodb://localhost:27017/eventmanagement', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully')) // Log success message
    .catch(err => console.error('MongoDB connection error:', err)); // Log error message if connection fails
*/

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/eventmanagement')
    .then(() => console.log('MongoDB connected successfully')) // Log success message
    .catch(err => console.error('MongoDB connection error:', err)); // Log error message if connection fails


// Route configuration
app.use('/events', eventRoutes); // Use eventRoutes for any requests to /events

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); // Log message when the server starts
});