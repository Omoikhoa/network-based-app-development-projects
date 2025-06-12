# Module9starter - Jibber Jabber

This project is a fully featured story sharing application with user authentication and authorization built using Express.js, EJS templating, and Mongoose.

## Project Structure

- **views/**
  - **user/**  
    - `profile.ejs`: Displays the logged-in user’s profile along with a list of stories they have created.
    - `new.ejs`: Sign-up form for new users.
    - `login.ejs`: Login form for existing users.
  - **story/**  
    - `index.ejs`: Lists all available stories.
    - `show.ejs`: Displays detailed information about a specific story. It shows edit and delete options only if the logged-in user is the author.
    - `new.ejs`: Form for creating a new story.
    - `edit.ejs`: Form for editing an existing story.
  - **partials/**  
    - `header.ejs`: Contains the navigation bar with dynamic links (e.g., Sign Up, Login, or Profile, Logout) and displays flash messages.
    - `footer.ejs`: Contains the footer information.
  - `index.ejs` & `error.ejs`: The landing page and error display view.

- **routes/**
  - `userRoutes.js`: Defines routes for user registration, login, profile viewing, and logout. Implements validation and rate limiting for login.
  - `storyRoutes.js`: Provides RESTful routes for story CRUD operations. Uses middleware to ensure that only authenticated users and story authors can modify stories.

- **controllers/**
  - `userController.js`: Handles user account creation, authentication, profile rendering, and logout.
  - `storyController.js`: Manages CRUD operations for stories, including creating, showing, editing, updating, and deleting stories. It also populates story author details when needed.

- **models/**
  - `story.js`: Defines the Mongoose schema for stories with required fields for title and content, validation rules, and a reference to the User model for the author.

- **middlewares/**
  - `auth.js`: Contains middleware for checking if a user is a guest, logged in, or the author of a story.
  - `validator.js` and **rateLimiters** (if available): Provide request validation and rate limiting for sensitive routes.

- **public/**
  - `css/style.css`: Contains all styles used by the application.

- **app.js**
  - Connects to a MongoDB database via Mongoose.
  - Configures session management using `express-session` with `connect-mongo` for persistence.
  - Mounts middleware for static files, URL-encoded payloads, HTTP logging (Morgan), and method overriding.
  - Sets up the main routes for the application and global error handling.

Explore the project to see how Express, EJS, and Mongoose integrate to create a robust story sharing platform with user account management and flash messaging.
