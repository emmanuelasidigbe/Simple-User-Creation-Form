# Simple User-Creation Form

This project demonstrates how to create a basic HTTP server using Node.js's built-in `http` module. The server handles routing, serves HTML pages, and processes form submissions.

---

## Project Objectives

- Create a simple HTTP server with Node.js.
- Implement routing to handle:
  - `GET /`: Display a greeting and a form to input a username.
  - `POST /create-user`: Process and log the submitted username.
  - `GET /users`: Display a list of dummy users.
- Use form data submitted via `POST` to log the username to the console and redirect to `/`.
- Demonstrate error handling with a 404 page.

---

## Features

1. **Dynamic Routing**:
   - Serves different pages based on the route (`/`, `/users`, `/create-user`).
2. **Form Handling**:
   - Accepts user input through a form and processes it server-side.
3. **User List**:
   - Displays a static list of dummy users.
4. **Error Handling**:
   - Displays a custom 404 page for unsupported routes.

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v6 or higher)

---

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install the packages**:
   ```bash
    npm i
   ```
3. **Run the project**:
   ```bash
        npm run dev
   ```
