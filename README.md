
# Event Management Application

## Created by James Fallouh, 6171620

### Overview
This project is a simple event management application built using React for the front end and Express with MongoDB for the back end. The application allows users to add, view, and delete events. The front end communicates with the back end using Axios for making HTTP requests.

### Project Structure

- **frontend**: Contains the React application.
  - **src**: Contains the source code for the React components.
  - **public**: Contains the public assets and the HTML template.

- **backend**: Contains the Express server and routes.
  - **models**: Mongoose schemas for MongoDB.
  - **routes**: API routes for handling requests.
  - **server.js**: Main server file to start the Express server.

### Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/event-management-app.git
   ```

2. Navigate to the `backend` folder and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Start the Express server:
   ```
   npm start
   ```

4. Navigate to the `frontend` folder and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

5. Start the React development server:
   ```
   npm start
   ```

### Usage

- The application runs on two different ports:
  - React frontend: `http://localhost:3000`
  - Express backend: `http://localhost:5001`

- Use the frontend to interact with the application. The frontend communicates with the backend to perform CRUD operations on events.

### Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Styling**: Bootstrap

### License

This project is licensed under the MIT License.
