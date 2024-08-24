// Created by James FALLOUH 6171620

import React from 'react';

/**
 * EventRowItem Component
 * This component renders a single row in the event table.
 * It displays event details and includes a button to remove the event.
 *
 * @param {number} eventId - The ID of the event.
 * @param {string} eventName - The name of the event.
 * @param {string} eventDate - The date of the event.
 * @param {string} eventAssigned - The person assigned to the event.
 * @param {Function} removeEvent - The function to call when the remove button is clicked.
 * @returns {JSX.Element} The rendered row for the event.
 */
function EventRowItem({ eventId, eventName, eventDate, eventAssigned, removeEvent }) {
    return (
        <tr>
            <th scope="row">{eventId}</th> {/* Display the event ID */}
            <td>{eventName}</td> {/* Display the event name */}
            <td>{eventDate}</td> {/* Display the event date */}
            <td>{eventAssigned}</td> {/* Display the person assigned to the event */}
            <td>
                {/* Button to remove the event */}
                <button className="btn btn-danger" onClick={() => removeEvent(eventId,eventName)}>Remove</button>
            </td>
        </tr>
    );
}

export default EventRowItem;