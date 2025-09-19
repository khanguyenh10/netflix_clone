# **Netflix Clone Coding**

**Submission Requirements**

1. **Git Link**:
    - Please provide a link to your Git repository.
    - The repository's `README.md` file must include a guide on how to install and run the project.
2. **Documentation**:
    - Please provide a document that introduces and explains your components and project structure to help us understand your work.

### Guide

1. **Completion is not required, but the application must be runnable.** (You don't have to complete all the features, but there should be no bugs when running the application.)
2. **You may use AI.**
3. **Please provide documentation and comments (in English)** to help us understand your project and code.

---

**Netflix Clone Coding**

### Overview

This is an assignment to clone the main and movie detail pages of Netflix using Next.js, Tailwind CSS, and TypeScript. It's crucial to dynamically render data by calling an API and to optimize screen loading speed with user experience in mind.

---

### Core Features and Requirements

### 1. Main Page

- **API Calls**: Fetch movie data from various categories (e.g., Popular Movies, Now Playing, Top Rated) using The Movie Database (TMDb) API. Instructions on how to get an API key can be found on the TMDb developer site.
    - https://developer.themoviedb.org/reference/intro/getting-started
- **Componentization**:
    - `Header` Component: For the top navigation bar.
    - `HeroSection` Component: To display a large banner image and movie information at the top of the page.
    - `MovieList` Component: To show multiple horizontal scrollable lists of movies.
    - `MovieCard` Component: To display the poster, title, and rating of an individual movie.
- **Responsive Design**: Implement a responsive layout for the movie lists based on screen size. For mobile screens, you should adjust card sizes and optimize the scrolling UI.
- **Performance Optimization**: Utilize Next.js features like SSR (Server-Side Rendering) or SSG (Static Site Generation) to improve initial loading speed, and use the Next.js `Image` component for image optimization.

### 2. Movie Detail Page

- **API Calls**: Fetch detailed movie information, trailer links, and a list of related movies based on a specific movie ID.
- **Componentization**:
    - `MovieDetail` Component: To display movie posters, titles, synopses, release dates, genres, and other detailed information.
    - `TrailerSection` Component: To integrate the YouTube API and allow users to play trailers.
    - `RelatedMovies` Component: To display a list of related movies.
- **Routing**: When a `MovieCard` is clicked on the main page, use dynamic routing to navigate to a URL like `/[movieId]`.

---

### 3. Tech Stack and Evaluation Criteria

- **Next.js**: Evaluate if the candidate properly utilizes routing and data fetching methods (e.g., `getServerSideProps`, `getStaticProps`).
- **TypeScript**: Check for clear type definitions for all components, states, and props.
- **Tailwind CSS**: Assess understanding of design systems and the use of utility classes for styling.
- **Componentization**: Evaluate how well UI elements are separated and managed into reusable components.
- **Responsive Design**: Check if the UI displays naturally and without breaking on various viewports (desktop, tablet, mobile).