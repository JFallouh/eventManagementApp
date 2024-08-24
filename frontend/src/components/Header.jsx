// Created by James FALLOUH 6171620

import React from 'react';

/**
 * Header Component
 * This component renders the header of the application.
 * It includes the title of the application.
 *
 * @returns {JSX.Element} The rendered header.
 */
function Header() {
    return (
        <header className="App-header">
            <h1 className="display-4"> Event Management Application</h1>
            <h3 className="display-4"> Created by: James FALLOUH</h3>
        </header>
    );
}

export default Header;