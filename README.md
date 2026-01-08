🛒 NeoCart – Full Stack E-Commerce Website

NeoCart is a full-stack e-commerce web application built using React, Node.js, Express, and MongoDB.
The project includes user authentication, cart, checkout, protected routes, and order placement.

This project is developed for learning and academic purpose.

✨ Features

🔐 User Registration & Login (JWT Authentication)

🧭 Navbar with Login / Logout toggle

🛍️ Product listing & product details

🛒 Add to Cart & Cart page

🔒 Protected Checkout (Login required)

📦 Place Order (Backend connected)

✅ Order Success page

🧾 Cart auto clear after order

🌐 Fully deployed (Frontend + Backend)

🛠️ Tech Stack
Frontend

React (Vite)

React Router DOM

Tailwind CSS

Deployed on Vercel

Backend

Node.js

Express.js

JWT Authentication

MongoDB Atlas

Deployed on Render

🔐 Authentication Flow

User registers with name, email, password

JWT token generated from backend

Token stored in localStorage

Protected routes check token before access

Logout clears token & user data
🛒 Checkout & Order Flow

User adds products to cart

Clicks Checkout

If not logged in → redirected to Login

If logged in → Checkout page opens

Address details entered

Order placed via backend API

Success page shown

Cart cleared automatically
