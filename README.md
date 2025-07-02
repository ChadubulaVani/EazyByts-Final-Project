# 🎉 Event Management System (EMS) - Full Stack Web Application

## 📖 Project Description

The **Event Management System (EMS)** is a modern full-stack web application designed to simplify the organization and booking of various events. It supports a wide range of categories including Sports, Food Festivals, Cultural Events, and more. Users can sign up, explore events, view sub-event details, and book tickets. Admins have access to a CMS-style dashboard to create and manage events.

---

## 🚀 Features

### ✅ User Features
- Register/Login with JWT-based authentication
- Browse event categories (e.g., Sports, Food Festival, Festivals)
- View sub-events with title, description, date, and price
- Book tickets for sub-events
- View booking history in a personalized dashboard
- Contact page to submit queries

### 🛠️ Admin Features
- Add/Edit/Delete categories and events
- Add sub-events under a main event
- View all bookings
- Manage users and queries

### 🌐 General Features
- Responsive UI with smooth navigation
- Protected routes for user and admin
- Real-time booking updates
- Confirmation messages and feedback

---

## 🛠️ Tech Stack Used

### 🧠 Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap 5 / Custom CSS

### 🔗 Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JSON Web Token (JWT)
- bcrypt.js

### 📦 Tools & Platforms
- MongoDB Compass
- VSCode
- Postman (API Testing)
- Git & GitHub

---

## 📂 Folder Structure

Event-Management-System/
│
├── .gitignore                         # Git ignore rules
├── README.md                          # Project documentation
│
├── backend/                             # Backend (Express + MongoDB)
│   ├── controllers/                     # Route handler logic
│   │   ├── adminController.js           # Handles admin-specific logic and routes 
│   │   ├── bookingController.js         # Handles booking operations (book, view, etc.)
│   │   ├── contactController.js         # Handles contact form submissions and queries
│   │   ├── eventController.js           # Handles event and sub-event CRUD operations
│   │   └── userController.js            # Handles user-related actions
│   │
│   ├── middleware/                      # Middleware for auth and admin
│   │   ├── adminOnly.js                 # Middleware to restrict access to admins only
│   │   └── authMiddleware.js            # Middleware to verify user JWT token
│   │
│   ├── models/                          # Mongoose schemas/models
│   │   ├── bookingModel.js              # Mongoose schema/model for bookings
│   │   ├── contact.js                   # Mongoose schema/model for contact queries
│   │   ├── eventModel.js                # Mongoose schema/model for main events and sub-events
│   │   └── userModel.js                 # Mongoose schema/model for user accounts
│
│   │
│   ├── routes/                          # API route definitions
│   │   ├── adminRoutes.js               # API routes accessible only to admins
│   │   ├── bookingRoutes.js             # API routes for booking-related operations
│   │   ├── contactRoutes.js             # API routes for contact form handling
│   │   ├── eventRoutes.js               # API routes for events and sub-events
│   │   └── userRoutes.js                # API routes for user login, registration, etc.
│   │
│   ├── .env                             # Environment variables (not committed to git)
│   ├── package.json                     # Backend dependencies and scripts
│   ├── package-lock.json                # Lockfile for backend
│   └── server.js                        # Entry point of Express server
│
├── frontend/                            # Frontend (React + Vite)
│   ├── node_modules/                    # React dependencies (generated after npm install)
│
│   ├── public/                          # Public assets like index.html
│
│   ├── src/                             # Main React source code
│   │   ├── components/                  # Shared components and logic
│   │   │   ├── AdminRoutes.jsx          # Admin route protection logic
│   │   │   ├── Layout.jsx               # Common layout wrapper with navbar
│   │   │   ├── Navbar.jsx               # Top navigation bar
│   │   │   ├── Navbar.css               # Styles for Navbar
│   │   │   ├── PrivateRoute.jsx         # Route protection for authenticated users
│   │   │   ├── Ticket.jsx               # Ticket component for bookings
│   │   │   ├── Ticket.css               # Styles for ticket component
│   │   │   └── userAuthContext.jsx      # Auth context for managing user login state
│   │
│   │   ├── pages/                       # Page-level components
│   │   │   ├── AdminBookings.jsx        # Admin page to view all bookings
│   │   │   ├── AdminBookings.css        # Styling for Admin page to view all bookings
│   │   │   ├── AdminContacts.jsx        # Admin page to view contact messages
│   │   │   ├── AdminContacts.css        # Styling for Admin page to view contact messages
│   │   │   ├── AdminDashboard.jsx       # Admin dashboard overview
│   │   │   ├── AdminEventManager.jsx    # Admin CRUD interface for events
│   │   │   ├── AdminEventManager.css    # Styling for Admin CRUD interface for events
│   │   │   ├── Contact.jsx              # Contact form page
│   │   │   ├── Contact.css              # Styling for Contact form page
│   │   │   ├── Dashboard.jsx            # User dashboard showing booked events
│   │   │   ├── Dashboard.css            # Styling for User dashboard showing booked events
│   │   │   ├── Home.jsx                 # Homepage with event categories
│   │   │   ├── Home.css                 # Styling for Homepage with event categories
│   │   │   ├── Login.jsx                # User login page
│   │   │   ├── Login.css                # Styling for User login page
│   │   │   ├── MainEvents.jsx           # Page displaying all main event categories
│   │   │   ├── MainEvents.css           # Styling for Page displaying all main event categories
│   │   │   ├── Payment.jsx              # Page for payment
│   │   │   ├── Payment.css              # Styling for Page for payment
│   │   │   ├── Register.jsx             # User registration page
│   │   │   ├── Register.css             # Styling for User registration page
│   │   │   ├── SubEvents.jsx            # Displays sub-events for selected category
│   │   │   └── SubEvents.css            #Styling for  Displaying sub-events for selected category
│   │
│   │   ├── App.jsx                      # Main app component with routes
│   │   ├── App.css
│   │   ├── index.js                     # ReactDOM render entry
│   │   ├── index.css                    # Global styles
│   │   └── main.jsx                     # Vite entry file
│
│   ├── index.html                      # Vite HTML entry point
│   ├── package.json                    # Frontend dependencies and scripts
│   ├── package-lock.json               # Lockfile for frontend
│   ├── vite.config.js                  # Vite configuration
│   ├── eslint.config.js                # ESLint config for frontend
└──


## ⚙️ Setup Instructions

### 📁 Clone the Repository

```bash
git clone https://github.com/ChadubulaVani/EazyByts-Final-Project.git
cd event-management-system 
```

## Backend Set Up
cd backend
npm install

## Create .env file and add : 
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

## Start the backend:
npm run dev

## Frontend Setup
cd frontend
npm install
npm run dev

## 💡 Future Enhancements
✅ Add payment gateway integration (Razorpay/Stripe)

✅ Email notifications for bookings

✅ Admin dashboard with analytics

✅ User reviews and event ratings

✅ Filter and search functionality for events

## 🤝 Contributor
Chadubula Vani - Full Stack Developer
In case of any queries related to this project, Feel free to Contact Me :
📩 chadubula.vani@gmail.com