# Manga Collectors - Project 5

This project is the fifth iteration of the Manga Collectors application. It extends previous versions by incorporating user account management with a dedicated dashboard and enhanced manga listing features.

## Project Structure

- **views/partials/**  
  Contains reusable components:
  - `header.ejs`: Site header with dynamic navigation (Sign Up/Login or My Account/Logout) and a search form.
  - `footer.ejs`: Site footer with social media links.

- **views/user/**  
  Contains user-related views:
  - `profile.ejs`: Displays the user dashboard with a table of the user’s manga listings and a section for offers.
  - `new.ejs`: A sign-up page for new users.

- **views/manga/**  
  Contains manga-related views:
  - `index.ejs`: Lists active manga listings sorted by price.
  - `show.ejs`: Displays detailed information about a manga item.
  - `new.ejs`: Provides a form to create new manga listings.
  - `edit.ejs`: Form for editing existing manga listings.

- **views/index.ejs & views/error.ejs**  
  - `index.ejs`: The homepage showcasing the platform.
  - `error.ejs`: Renders error messages for invalid routes and other server errors.

- **Controllers** (e.g., `mangaController.js`)  
  Handle business logic for CRUD operations on manga listings, including integration with user sessions and flash messages.

- **public/**  
  Contains static assets:
  - `css/style.css`: Styles for a responsive, user-friendly design.
  - Images and icons used throughout the website.

Explore the project to see how Express.js, EJS templating, and middleware come together to create an integrated web application with comprehensive user and content management.
