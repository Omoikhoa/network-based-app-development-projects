# Middleware Demo 4

This project demonstrates advanced middleware usage in an Express.js application with file upload handling using Multer. Key components include:

- **Views:**
  - `index.ejs`: The home page with static content.
  - `student.ejs`: Displays student details if a matching student is found; otherwise shows an error message.
  - `new.ejs`: Provides a form to add a new student, including file upload for a profile image.
  
- **Public:**
  - `public/css/style.css`: Contains styling rules for the views.
  
- **Application Setup (app.js):**
  - Configures middleware to serve static assets and parse URL-encoded data.
  - Implements file upload functionality using Multer (with custom storage, file filters, and size limits).
  - Uses Morgan for logging HTTP requests.
  - Defines routes for the home page (`/`), listing students (`/students`), displaying a form to add a new student (`/students/new`), and showing details for an individual student (`/students/:sid`).

Explore the project to see how middleware and file upload handling extend the capabilities of a basic Express.js application.
