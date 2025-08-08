# SnapServe 🍽️

SnapServe is a simple React + Vite web application for ordering food, groceries, and rides.  
It has multiple pages, reusable components, and a cart system using React Context API.

---

## 🚀 Features
- Home page with a hero section
- Food, Grocery, and Ride service pages
- Navbar, Footer, and reusable cards
- Scroll to Top functionality
- 404 error page handling
- Add to cart and manage items (using Context API)

---

## 🛠 Tech Stack
- React (Vite) - Frontend framework & build tool
- Bootstrap (CSS & JS)** – Styling and responsive layout
- JavaScript (ES6+)
- React Router - Page navigation
- Context API - Gobal state management

---


## 📂 Folder Structure
```bash
src/
├── assets/ # Images & icons
├── components/ # Navbar, HeroSection, ItemCard, ServiceCard, Footer, Cart, ScrollToTop, NotFound
├── context/ # CartContext.jsx
├── pages/ # Home, Food, Grocery, Ride
├── App.jsx
├── main.jsx
└── index.css
```


---

## ⚙️ How to Run the Project
```bash
# Clone the repository
git clone https://github.com/Vivek282002/SnapServe.git

# Go into the project folder
cd SnapServe

# Install dependencies
npm install

# Install bootstrap
npm install bootstrap

# Import bootstrap in main.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

# Start development server
npm run dev
```
