# Middleware Demo 2

This project demonstrates basic middleware usage in an Express.js application with EJS templating.

## Project Structure

- **views/**
  - `index.ejs`: The home page with introductory content.
  - `student.ejs`: Displays details for a specific student based on URL parameter.
  - `new.ejs`: Contains a form to add a new student.
- **public/**
  - `css/style.css`: Contains styles for the views.
- **app.js**
  - Sets up the Express server.
  - Uses middleware for serving static assets and parsing URL-encoded data.
  - Defines routes for the home page, listing students (JSON response), adding new students, and displaying student details.
  
Explore the code to see how middleware simplifies routing and view rendering.
