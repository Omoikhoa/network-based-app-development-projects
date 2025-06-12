# Manga Collectors - Project 3

This project is the third iteration of the Manga Collectors application, a web platform built with Express.js and EJS. It allows users to browse, view details, create, edit, and delete manga listings while maintaining a consistent design through reusable components.

## Project Structure
- **views/partials/**  
  Contains shared components:
  - *header.ejs*: Site header, navigation, and search bar.
  - *footer.ejs*: Footer with social media icons.
- **views/manga/**  
  Contains manga-related views:
  - *index.ejs*: Lists active manga listings sorted by price.
  - *show.ejs*: Displays detailed information for a specific manga.
  - *new.ejs*: Form to create a new manga listing.
  - *edit.ejs*: Form to edit an existing manga listing.
- **views/index.ejs**  
  The homepage welcoming users to the platform.
- **views/error.ejs**  
  Renders error messages for invalid routes and other server errors.
- **public/css/style.css**  
  Holds the styling for the entire application.
- **Other Assets**  
  Images and other static files are located in the public folder.

Explore the project code to see how server-side templating, routing, and static asset delivery come together in a dynamic web application.
