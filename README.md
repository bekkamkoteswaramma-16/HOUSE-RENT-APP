# HOUSE-RENT-APP# 🏠 House Rent Application 

## 📌 Assignment Objective
Transform a React application into a Multi-Page Application using React Router DOM. Implemented routing, layouts, nested routes, dynamic routing, and 404 page handling.

## 🚀 Features Implemented

### Module 1 & 2 - Navigation & Routing
- ✅ BrowserRouter Implementation
- ✅ Routes & Route Definitions for all pages
- ✅ Reusable Navbar and Footer
- ✅ Pages: Home, About, Login, Register, Dashboard, Details

### Module 3 & 4 - Layout & Navigation Links
- ✅ Layout Component with Header, Main Content, Footer
- ✅ Nested Routing using `<Outlet />`
- ✅ NavLink with active page highlighting
- ✅ Dynamic Navigation menu using.map()

### Module 5 & 6 - Programmatic & Dynamic Routing
- ✅ useNavigate() for Login redirect and Back button
- ✅ Dynamic Routing: `/details/:id` using useParams()
- ✅ Data passing between pages

### Module 7 & 8 - Nested Routes & 404
- ✅ Nested Dashboard Routes: Overview, Profile, Settings
- ✅ Professional 404 Page Not Found with "Return to Home" button

## 🛠️ Tech Stack
- React 18 + Vite
- React Router DOM v6
- LocalStorage for User Authentication
- CSS Inline Styling

## 📂 Project Structure
src/
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ └── Layout.jsx
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Dashboard.jsx
│ ├── DashboardOverview.jsx
│ ├── DashboardProfile.jsx
│ ├── DashboardSettings.jsx
│ ├── Details.jsx
│ ├── TenantHome.jsx
│ └── NotFound.jsx
├── data/
│ └── dummyData.js
├── App.jsx
└── main.jsx
