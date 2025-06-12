# Manga Collectors - Project 4

This project is an advanced version of the Manga Collectors application. It extends previous iterations by adding user account management and a dedicated dashboard for users to manage their manga listings.

## Project Structure

- **views/partials/**  
  Contains shared components used across multiple pages:
  - `header.ejs`: Defines the site header including dynamic navigation (sign up, login, or account options based on authentication state).
  - `footer.ejs`: Contains the site footer with social media links.
  
- **views/user/**  
  Contains user-related views:
  - `profile.ejs`: Displays the user dashboard with a table of the user’s manga listings.
  - `new.ejs`: A sign-up page for creating a new user account.
  
- **views/manga/**  
  Contains manga-related views:
  - `show.ejs`: Shows detailed information for a single manga item.
  - `new.ejs`: Provides a form for creating new manga listings.
  - `edit.ejs`: Form for editing existing manga listings.
  
- **views/index.ejs & views/error.ejs**  
  - `index.ejs`: The homepage of the application.
  - `error.ejs`: Renders error messages for invalid requests.
  
- **controllers/**  
  Contains the server-side logic for manga listings (CRUD operations) which ties into user sessions and flash messages.
  
- **public/**  
  Holds static assets such as CSS (in `css/style.css`), images, and icons.

Explore the project to see how Express.js, EJS templating, and middleware (like session and flash) come together to offer a full-featured web application with user authentication and content management.
