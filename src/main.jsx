import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Login from './components/Login/Login';
import CartProductLoader from './components/Loader/CartProductLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/order",
        element: <Order />,
        loader: () =>CartProductLoader()
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
