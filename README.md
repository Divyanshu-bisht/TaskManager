# Task Manager API

A scalable full-stack task management application with JWT authentication, role-based access, CRUD operations, and protected routes.

## Features

- User Registration & Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Access Control
- CRUD Operations for Tasks
- RESTful APIs
- Swagger API Documentation
- React Frontend Integration
- MongoDB Database

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Swagger
- Helmet
- CORS
- Morgan

### Frontend
- React.js
- React Router DOM
- Axios
- Vite

---

## Installation

### Clone Repository

```bash
git clone your_repo_url
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create `.env` inside backend:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

---

## API Documentation

Swagger Docs:

```txt
http://localhost:5000/api-docs
```

---

## Scalability Notes

- Modular backend architecture
- JWT-based stateless authentication
- Middleware-based authorization
- Easily scalable for microservices
- RESTful API design
- Separate frontend/backend architecture

---

## Author

Divyanshu Bisht