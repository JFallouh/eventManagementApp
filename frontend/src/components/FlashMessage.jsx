// Created by James FALLOUH 6171620

import React from 'react';

/**
 * FlashMessage Component
 * This component renders a flash message to the user.
 *
 * @param {string} type - The type of the message (e.g., 'success', 'error').
 * @param {string} message - The message to display.
 * @returns {JSX.Element} The rendered flash message.
 */
function FlashMessage({ type, message }) {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {message}
        </div>
    );
}

export default FlashMessage;