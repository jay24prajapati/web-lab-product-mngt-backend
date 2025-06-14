# web-lab-product-mngt-backend

# Node.js Backend Tutorials Repository

This repository has the backend code for the Product Management system, built as part of CSCI5709 - Advanced Topics in Web Development. It is the server-side code that works with the Angular frontend, handling things like product data through APIs. This is all related to the tutorial activities for the course.

## Project Overview

All Tutorials Activities:

- Tutorial 1 - Environment Setup (Angular + GitHub)
- Tutorial 2 - Angular SPA – Routing, State Management & Lifecycle Hooks
- Tutorial 3 - Backend Introduction & API Integration (frontend repo link: [https://github.com/jay24prajapati/web-lab-product-management/](https://github.com/jay24prajapati/web-lab-product-management/))
- Tutorial 4 - Angular Forms, Validation & API Integration

It is built with Node.js and Express.js to provide RESTful APIs for the frontend to use.

## Development Server

To get the backend running on your machine, just follow these steps:

1. Clone the repo:
   ```bash
   git clone https://github.com/jay24prajapati/web-lab-product-mngt-backend.git
   ```
2. Go into the project folder:
   ```bash
   cd web-lab-product-mngt-backend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. The server will be up at `http://localhost:3000`.

## API Endpoints

Quick list of the APIs this backend provides (these are the main endpoints for product management):

- **GET /api/products** - Get all products.
- **GET /api/products/:id** - Get a single product by its ID.
- **POST /api/products** - Add a new product.
- **PUT /api/products/:id** - Update a product.
- **DELETE /api/products/:id** - Delete a product.

All these endpoints work with JSON data.

## Project Versions

- **Node.js**: 22.16.0
- **npm**: 10.9.2

- **Dependencies**:
  - cors: 2.8.5
  - express: 5.1.0
  - nodemon: 3.1.10

## Deployment

Right now, this backend is set up for local use during development. 

## Additional Resources

If you need more info, check these out:

- [Node.js Docs](https://nodejs.org/en/docs/)
- [Express.js Docs](https://expressjs.com/)