# Middleware Demo 3

This project demonstrates the usage of middleware in an Express.js application using EJS templating. Key features include:

- **Views:**
  - `index.ejs`: Home page that displays a static description.
  - `student.ejs`: Renders student details if a matching student is found; otherwise, displays an error message.
  - `new.ejs`: Contains a form to add a new student.

- **Public:**
  - `public/css/style.css`: Provides styling for the views.

- **App Setup (app.js):**
  - Configures middleware for serving static files and processing URL-encoded form data.
  - Implements basic routing for home, student details, and adding new students.
  - Uses Morgan for logging HTTP requests.

Explore the project to see how middleware enhances Express.js routing and view rendering in a simple demo application.
