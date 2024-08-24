//Created by: James FALLOUH 6171620
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventTable from "./components/EventTable";
import NewEventForm from "./components/NewEventForm";
import FlashMessage from './components/FlashMessage';
/**
 * App Component
 * Created by: James FALLOUH 6171620
 * This is the main component of the application.
 * It handles the state for events and the visibility of the add event form.
 * It also contains functions to fetch, add, and remove events.
 */
function App() {
  // State to control the visibility of the add event form
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  
  // State to store the list of events
  const [events, setEvents] = useState([]);

// State for flash messages
  const [flashMessage, setFlashMessage] = useState(null);
  // useEffect to fetch events from the backend when the component mounts
  useEffect(() => {
    // Fetch events from the backend
    axios.get('http://localhost:5001/events')
        .then(response => setEvents(response.data)) // Update the state with the fetched events
        .catch(error => console.error('Error fetching events:', error)); // Handle any errors
  }, []); // Empty dependency array means this effect runs once when the component mounts

  /**
   * Function to add a new event
   * @param {string} name - The name of the event
   * @param {string} date - The date of the event
   * @param {string} assigned - The person assigned to the event
   */
  const addEvent = (name, date, assigned) => {
    const newEvent = {
      eventName: name,
      eventDate: date,
      eventAssigned: assigned
    };
    // Add event to the backend



  axios.post('http://localhost:5001/events', newEvent)
      .then(response => {
        setEvents([...events, response.data]);// Update the state with the new event
        setFlashMessage({ type: 'success', message: 'Event added successfully!' });
      })
      .catch(error => console.error('Error adding event:', error));
}


  /**
   * Function to remove an event
   * @param {string} eventId - The ID of the event to remove
   */

  /*
  const removeEvent = (eventId) => {
    // Remove event from the backend
    axios.delete(`http://localhost:5001/events/${eventId}`)
        .then(() => setEvents(events.filter(event => event._id !== eventId))) // Update the state to remove the event
        .catch(error => console.error('Error removing event:', error)); // Handle any errors
  };
*/
    const removeEvent = (eventId, eventName) => {
        if (window.confirm(`Are you sure you want to remove the event "${eventName}"?`)) {
            // Remove event from the backend
            axios.delete(`http://localhost:5001/events/${eventId}`)
                .then(() => {
                    setEvents(events.filter(event => event._id !== eventId));
                    setFlashMessage({ type: 'success', message: 'Event removed successfully!' });
                })
                .catch(error => console.error('Error removing event:', error));
        }
    };
  return (
      <div className='mt-5 container'>
        <Header /> {/* Render the header component */}
          {flashMessage && <FlashMessage type={flashMessage.type} message={flashMessage.message} />}
          <div className="card">
          <div className="card-header">
            <div className="card-title">
              Your Events
            </div>
          </div>
          <div className="card-body">
            <EventTable events={events} removeEvent={removeEvent} /> {/* Render the event table */}
            <button onClick={() => setShowAddEventForm(!showAddEventForm)} className='btn btn-primary'>
              {showAddEventForm ? 'Close New Event' : 'New Event'} {/* Toggle button text based on form visibility */}
            </button>
            {showAddEventForm && <NewEventForm addEvent={addEvent} />} {/* Conditionally render the new event form */}
          </div>
        </div>
        <Footer /> {/* Render the footer component */}
      </div>
  );
}

export default App;