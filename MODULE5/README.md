# MODULE5 - Basic Express & EJS Demo

This project demonstrates a simple Express application using EJS templating. It includes:

- **Views:**
  - `index.ejs`: The home page with static content.
  - `student.ejs`: Displays details of a student based on the student ID. If the student is not found, an error message is shown.

- **Application Setup (app.js):**
  - Configured to use EJS as the view engine.
  - Provides routes for:
    - `/`: Renders the home page.
    - `/students`: Returns a JSON listing of all students.
    - `/students/:sid`: Renders details for the specific student.
    - `/about`, `/contact`, and `/contact-us`: Additional routes with redirection.

Explore the code to understand how routing and view rendering are implemented in this Node.js application.
