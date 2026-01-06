# BBC Bangla Clone

This is a functional and responsive clone of the **BBC Bangla** news website. I built this project to practice dynamic routing, API data fetching, and modern UI design using the React ecosystem.

## Project Setup

I build this project using (vite + react), also using react router, tailwindcss, react icons etc.

## Folder Structure

src/
├── assets/ # Static files like images and BBC favicon
├── components/ # Reusable components (NewsCard, Spinner, Footer, etc.)
├── pages/ # Main pages
├── layouts/ # Pages layout
├── App.jsx # Main app component & Routing setup
├── index.css # Global styles & Tailwind directives
└── main.jsx # Entry point
public/
└── \_redirects # Netlify redirect rules for React Router

## Key Decisions

-Vite: I used Vite as the build tool because it is significantly faster than Create React App for local development.

-React Router: I implemented dynamic routing using :id parameters. This allows the app to load different news categories (like Politics, Sports, or World) using a single dynamic component.

-Tailwind CSS: I used Tailwind for all the styling. It helped me easily create the BBC signature look, including the horizontal scrolling menu for mobile users.

-React Icons: I used this library for social media and UI icons because it provides a huge collection and is very easy to style.

-Netlify Deployment: Since this is a Single Page Application (SPA), I added a \_redirects file to the public folder. This ensures that when a user refreshes the page on a specific route, they don't get a 404 error.

## Live Link: (https://bbc-bangla-clone.netlify.app/)
