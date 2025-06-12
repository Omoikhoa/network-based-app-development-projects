# Module8starter - Jibber Jabber

This project is a comprehensive story-sharing application with user authentication built using Express.js, EJS templating, Mongoose for MongoDB integration, and middleware for session management and flash messaging.

## Project Structure

- **views/**
  - **user/**  
    - `profile.ejs`: Displays the logged-in user’s profile along with a list of their created stories.
    - `login.ejs`: Login form for users.
    - `new.ejs`: Sign-up form for new users.
  - **story/**  
    - `index.ejs`: Lists all available stories.
    - `show.ejs`: Displays details of a single story. If the logged-in user is the author, edit/delete options are shown.
    - `new.ejs`: Form to create a new story.
    - `edit.ejs`: Form to edit an existing story.
  - **partials/**  
    - `header.ejs`: Contains the navigation bar, dynamic user links (Sign Up/Login or Profile/Logout), and flash messages.
    - `footer.ejs`: Contains the footer content.
  - `index.ejs` & `error.ejs`: Landing page and error display view.

- **routes/**
  - `userRoutes.js`: Defines routes for user registration, login, profile access, and logout.
  - `storyRoutes.js`: Defines RESTful routes for story CRUD operations; includes middleware for authentication and authorization (only authors can edit or delete stories).

- **controllers/**
  - `userController.js`: Handles user registration, authentication, profile rendering, and logout.
  - `storyController.js`: Implements CRUD operations for stories by interfacing with the Story model.

- **models/**
  - `story.js`: Defines the Mongoose schema for stories with fields for title, author (referenced from the User collection), and content. Includes built-in validations and timestamps.
  - *(User model, if available, handles user schema and password comparison.)*

- **middlewares/**
  - `auth.js`: Contains middleware functions to check if the user is a guest, logged in, or the author of a story.
  - `validator.js`: Validates route parameters (e.g., story IDs).

- **public/**
  - `css/style.css`: Contains the styling rules for the application.

- **app.js**
  - Connects to MongoDB using Mongoose.
  - Configures session management with `express-session` and `connect-mongo`, along with flash messaging.
  - Mounts middleware for static files, URL encoding, logging (Morgan), and method overriding.
  - Sets up base routes and error handling.

Explore the project to see how Express, EJS, and Mongoose come together to create a full-featured story sharing platform with user authentication and authorization.
