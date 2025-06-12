# Jibber Jabber - Module6starter

This project is an enhanced version of the story sharing application "Jibber Jabber." Built with Express.js and EJS templating, it uses Mongoose for MongoDB integration to provide full CRUD operations for managing stories.

## Project Structure

- **views/**
  - **story/**: Contains story-specific views:
    - `index.ejs`: Lists all available stories.
    - `show.ejs`: Displays details of a single story along with Edit and Delete options.
    - `new.ejs`: Provides a form to create a new story with validation attributes.
    - `edit.ejs`: Contains a form to edit an existing story.
  - **partials/**:
    - `header.ejs`: Contains the navigation bar and site header.
    - `footer.ejs`: Contains the site footer.
  - `index.ejs`: The landing page.
  - `error.ejs`: Renders error messages to the user.
  
- **routes/**
  - `storyRoutes.js`: Defines RESTful routes for story operations and connects them to the story controller.
  
- **controllers/**
  - `storyController.js`: Implements request handlers (index, show, new, create, edit, update, delete) by interfacing with the story model.
  
- **models/**
  - `story.js`: Defines the Mongoose schema for stories with fields for title, author, and content. It includes validation rules (e.g., required fields and minimum content length) and uses built-in timestamps.
  
- **app.js**
  - Connects to MongoDB via Mongoose (using a MongoDB Atlas connection string).
  - Mounts middleware for serving static files, parsing URL-encoded data, method override, and HTTP logging using Morgan.
  - Sets up the primary routes and error handling middleware.

- **public/**
  - Contains static assets such as CSS (`style.css`) to style the application.

Explore the code to see how Express, EJS, and Mongoose work together to deliver a robust story management application.
