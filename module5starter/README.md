# Jibber Jabber - Module5starter

This project is a story sharing web application developed as a starter for Module 5. Users can create, view, edit, and delete stories. The application uses Express.js with EJS templating and connects to a MongoDB database for persistent storage.

## Project Structure

- **views/**
  - **story/**: Contains story-specific pages:
    - `index.ejs`: Lists all available stories.
    - `show.ejs`: Displays details of a single story along with edit and delete options.
    - `new.ejs`: Provides a form to create a new story.
    - `edit.ejs`: Contains a form for editing an existing story.
  - **partials/**:
    - `header.ejs`: Contains the navigation bar and site title.
    - `footer.ejs`: Contains footer information.
  - `error.ejs`: Renders error information when issues occur.
  - `index.ejs`: The landing page for the application.
  
- **routes/**
  - `storyRoutes.js`: Defines RESTful routes for story operations and delegates logic to the story controller.
  
- **controllers/**
  - `storyController.js`: Contains logic for handling story requests (CRUD operations) by interfacing with the model.
  
- **models/**
  - `story.js`: Implements functions to interact with the MongoDB collection, including finding, saving, updating, and deleting stories.
  
- **app.js**
  - Sets up the Express application, mounts middleware (static file serving, URL-encoded parser, method override, logging), connects to MongoDB, and configures error handling.
  
- **public/**
  - `css/style.css`: Provides styling for the application.

Explore the code to see how Express, EJS, and MongoDB are integrated to build a full-featured story management application.
