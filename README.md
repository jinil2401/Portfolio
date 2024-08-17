# Jinil Parekh's Portfolio

Welcome to my portfolio repository! This project showcases my work and includes both a Node.js backend and a React frontend, styled with CSS.

## Project Structure

This repository is organized into the following structure:

### `/server`

-   **`/api`**:
    -   `mail.js` - Handles sending emails via Nodemailer.
-   `.env` - Environment variables for the backend.
-   `db.js` - Configures MongoDB connection and schemas.
-   `index.js` - Main server file that sets up the Express server.

### `/src`

-   **`/Components`**:
    -   `App.jsx` - Root React component.
-   `index.css` - Global styles.
-   `index.jsx` - Entry point for React components.
-   `main.jsx` - Main script for rendering React components.
-   `index.html` - The HTML file serving the React app.
-   `package.json` & `package-lock.json` - NPM configuration files.
-   `.gitignore` - Specifies intentionally untracked files to ignore.
-   `README.md` - Documentation of the project.
-   `vite.config.js` - Configuration for the Vite build tool.

## Getting Started

### Prerequisites

Ensure you have the following installed:

-   Node.js (version 20.13 or higher)

### Setup

Clone the repository:
 ```sh
`git clone https://github.com/jinilparekh/Portfolio.git
cd Portfolio` 
 ```

### Backend Setup

Navigate to the server directory:
```bash
`cd server` 
  ```
Install dependencies:
```bash
`npm install` 
```
Start the backend server:
```bash
`npm run dev` 
```
The backend server should now be running on [http://localhost:8888](http://localhost:8888).

### Frontend Setup

Navigate back to the root directory and to the `src` directory:
```bash
`cd ../src` 
```
Install dependencies:
```bash
`npm install` 
```
Start the development server:
```bash
`npm run dev` 
```
The frontend application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

Access the portfolio by navigating to [http://localhost:3000](http://localhost:3000) in your browser. The frontend communicates with the backend to send emails and fetch data dynamically.

## Contributing

Contributions are welcome. Please fork the repository and submit pull requests with your suggested changes. For major changes or enhancements, please open an issue first to discuss what you would like to change.

## Environment Variables

Create a `.env` file in the server directory and include the following variables to configure your environment:

```plaintext
`DBUSER=<MongoDB-username>
DBPWD=<MongoDB-password>
DBHOST=<MongoDB-host>
EMAIL_USER=<email-address>
EMAIL_PASS=<email-password>`

```
