# Vite + React-TS date picker app

 This project is a real-time date picker application built with React and TypeScript. The app utilizes Vite as the build tool and provides a dynamic interface for selecting date ranges, making it engaging and interactive.

## Features
- Date range selection: Users can select date ranges using a calendar interface, with the ability to choose predefined ranges such as "Last 7 Days" and "Last 30 Days".
- Dynamic Display of Weekends: The application identifies and displays weekends within the selected date range.
- Notifications: Provides alerts whenever a date range is selected, along with details of weekends included in that range.
- Responsive UI: The user interface is designed to be responsive, ensuring compatibility across devices and screen sizes.

## Install Dependecies
```
npm install
```

## Start the dev server
```
 npm run dev
```
 The application will be available at `http://localhost:5173`

## Project Structure
- /components: Contains reusable React components, including the main DatePicker component for selecting date ranges.
- /utils: Utility functions for rendering the calendar and formatting dates.
- /hooks: Custom hooks for managing state and logic for the date picker.
- /public: Contains static assets like images, icons, and any other public files used in the app.

## Libraries and Tools 
- React: A JavaScript library for building user interfaces, used here for component-based development.
- TypeScript: Provides static typing, improving code quality, refactoring, and overall maintainability.
- Vite: A fast, modern build tool for web projects, offering lightning-fast hot module replacement (HMR).

## Development Environment
- Node.js: Version 20.17.0 is required to install dependencies and run the project.
- Vite: Provides a fast development environment and optimized build process.
- ESLint: Linting tool for maintaining code consistency and avoiding bugs.
- Operating System: The app has been developed and tested on Ubuntu 23, but it should work on other OSes as well.

## Note
- This app is intended to demonstrate the front end and does not use an actual back-end. The data is mocked to simulate real-time user additions.

## Actual screenshot of the project 

![Alt text](public/app_ss.png?raw=true "Title")