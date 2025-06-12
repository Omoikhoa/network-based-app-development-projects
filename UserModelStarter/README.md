# User Model Starter

This project demonstrates a basic user management system using Node.js and Mongoose. It includes user schema definition, password hashing, and basic CRUD operations for user accounts.

## Project Structure

- **models/user.js**  
  Defines the Mongoose schema for users with required fields:
  - firstName
  - lastName
  - email (unique)
  - password

  It uses a pre-save middleware to hash passwords with bcrypt and provides a method to compare a login password against the stored hash.

- **controllers/userController.js**  
  Manages user registration, login, profile retrieval, and logout. It uses flash messages for error/success notifications.

- **routes/userRoutes.js**  
  Sets up Express routes for:
  - User sign-up (GET /new and POST /)
  - Login (GET /login and POST /login)
  - Profile access (GET /profile)
  - Logout (GET /logout)

- **views/**  
  Contains EJS templates:
  - `new.ejs`: User registration form.
  - `login.ejs`: Login form.
  - `profile.ejs`: Displays the user’s profile.

- **app.js**  
  Configures the Express server, connects to MongoDB, mounts middleware (including session, flash, static file serving, and logging), and integrates user routes.

Explore the code to learn how to build a basic user authentication system with Mongoose and Express.
