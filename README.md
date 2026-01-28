📦 Inventory Management System

A simple and clean Inventory Management System built with React, Redux Toolkit, and Vite.
This app allows users to add products with details like name, price, quantity, and category, and manage inventory state efficiently using Redux.

🔗 Live Demo:
https://inventory-management-syetem.netlify.app/

🚀 Features

➕ Add new products to inventory

📋 Display product list dynamically

🧠 Global state management using Redux Toolkit

⚡ Fast development with Vite

🎨 Clean and responsive UI

🌐 Deployed on Netlify

🛠️ Tech Stack

React.js

Redux Toolkit

React Redux

Vite

JavaScript (ES6)

CSS

📂 Project Structure
src/
<br/>
│── assets/
<br/>
│── Components/
<br/>
│   ├── ProductForm.jsx
<br/>
│   └── ProductList.jsx
<br/>
│
<br/>
│── feature/
<br/>
│   └── product/
<br/>
│       └── productSlice.js
<br/>
│
<br/>
│── store/
<br/>
│   └── store.js
<br/>
│
<br/>
│── App.jsx
<br/>
│── main.jsx
<br/>
│── index.css

🧩 Redux Store Setup
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../feature/product/productSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;

📸 Screenshots
Inventory Form

Add product name, price, quantity, and category

Empty State

Displays "No Data Found" when no products are added

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/your-username/inventory-management-system.git


Navigate to the project folder

cd inventory-management-system


Install dependencies

npm install


Run the development server

npm run dev

📦 Build for Production
npm run build

🌍 Deployment

The project is deployed using Netlify.
To deploy your own version:

npm run build


Upload the dist folder to Netlify.

🙌 Author

Amit Dabhi

GitHub: @amitdabhi01

📄 License

This project is licensed under the MIT License.
