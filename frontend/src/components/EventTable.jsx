//Created by James FALLOUH 6171620
import React from 'react'; // Import React library
import EventRowItem from "./EventRowItem"; // Import the EventRowItem component

/**
 * Created by James FALLOUH 6171620
 * EventTable Component
 * This component is responsible for displaying a table of events.
 * It receives the list of events and the removeEvent function as props.
 *
 * @param {Array} events - The list of events to display.
 * @param {Function} removeEvent - The function to call when an event needs to be removed.
 * @returns {JSX.Element} The rendered table of events.
 */
function EventTable({ events, removeEvent }) {
    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Assigned</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {events.map(event => (
                // For each event, render an EventRowItem component
                <EventRowItem
                    key={event._id} // Use the unique MongoDB _id as the key
                    eventId={event._id} // Pass the _id as eventId to EventRowItem
                    eventName={event.eventName} // Pass the event name to EventRowItem
                    eventDate={event.eventDate} // Pass the event date to EventRowItem
                    eventAssigned={event.eventAssigned} // Pass the assigned person to EventRowItem
                    removeEvent={removeEvent} // Pass the removeEvent function to EventRowItem
                />
            ))}
            </tbody>
        </table>
    );
}

export default EventTable;