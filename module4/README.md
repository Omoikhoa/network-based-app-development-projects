# Jibber Jabber - Module 4

This project is a story sharing web application called "Jibber Jabber." It allows users to create, read, update, and delete stories. The application is built using Express.js with EJS templating.

## Project Structure

- **views/partials/**  
  Contains shared components:
  - `header.ejs`: Defines the navigation and site title.
  - `footer.ejs`: Contains the footer information.
  
- **views/story/**  
  Contains story-related views:
  - `index.ejs`: Lists available stories.
  - `show.ejs`: Displays a single story's details along with edit/delete options.
  - `new.ejs`: Form for creating a new story.
  - `edit.ejs`: Form for editing an existing story.
  
- **views/**  
  Other views include:
  - `index.ejs`: The landing page for the application.
  - `error.ejs`: Renders error messages in case of issues.

- **models/**  
  - `story.js`: Contains the in-memory data store and functions to handle story operations (find, create, update, delete). Uses Luxon for date formatting and UUID for unique story IDs.

- **controllers/**  
  - `storyController.js`: Implements the request handlers for story-related routes by interfacing with the model.

- **routes/**  
  - `storyRoutes.js`: Defines the routes for story operations (including RESTful routes) and delegates logic to the story controller.

- **app.js**  
  Sets up the Express application, mounts middleware (static file serving, URL-encoded parser, method override, logging), and configures the main routes including error handling.

Explore the code to see how Express routing, middleware, and templating integrate to provide full CRUD functionality for story sharing.
