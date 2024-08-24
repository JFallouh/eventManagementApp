// Created by James FALLOUH 6171620

import React, { useState } from 'react';

/**
 * NewEventForm Component
 * This component renders a form to add a new event.
 * It includes fields for event name, date, and assigned person,
 * and a button to submit the form.
 *
 * @param {Function} addEvent - The function to call when a new event is added.
 * @returns {JSX.Element} The rendered form to add a new event.
 */
function NewEventForm({ addEvent }) {
    // State to manage the form inputs
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [assigned, setAssigned] = useState('');

    // State to manage validation errors
    const [errors, setErrors] = useState({});
    // Function to handle the form submission
    const submitEvent = () => {

        const newErrors = {};

        if (!name) newErrors.name = 'Event name is required';
        if (!date) newErrors.date = 'Event date is required';
        if (!assigned) newErrors.assigned = 'Assigned person is required';

        //if (name && date && assigned) {
        if (Object.keys(newErrors).length === 0) {
            addEvent(name, date, assigned); // Call the addEvent function with the input values
            setName(''); // Reset the name input field
            setDate(''); // Reset the date input field
            setAssigned(''); // Reset the assigned input field
            setErrors({}); // Clear any existing errors
        } else {
            setErrors(newErrors); // Set the new errors
        }
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Event Name</label>
                    <input
                        type='text'
                        //className='form-control'
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`} // Add 'is-invalid' class if there's an error
                        onChange={e => setName(e.target.value)} // Update the name state on change
                        value={name} // Bind the input value to the name state
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>} {/* Display error message */}
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Event Date</label>
                    <input
                        type='date'
                        //className='form-control'
                        className={`form-control ${errors.date ? 'is-invalid' : ''}`} // Add 'is-invalid' class if there's an error
                        onChange={e => setDate(e.target.value)} // Update the date state on change
                        value={date} // Bind the input value to the date state
                    />
                    {errors.date && <div className="invalid-feedback">{errors.date}</div>} {/* Display error message */}
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Assigned Person</label>
                    <input
                        type='text'
                        //className='form-control'
                        className={`form-control ${errors.assigned ? 'is-invalid' : ''}`} // Add 'is-invalid' class if there's an error
                        onChange={e => setAssigned(e.target.value)} // Update the assigned state on change
                        value={assigned} // Bind the input value to the assigned state
                    />
                    {errors.assigned && <div className="invalid-feedback">{errors.assigned}</div>} {/* Display error message */}
                </div>
                <button
                    type='button'
                    className='btn btn-primary mt-3'
                    onClick={submitEvent} // Call the submitEvent function on click
                >
                    Add Event
                </button>
            </form>
        </div>
    );
}

export default NewEventForm;