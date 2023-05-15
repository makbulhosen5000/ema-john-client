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
import OrderCheckout from './components/OrderCheckout/OrderCheckout';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './components/Provider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Shop />,
        loader:()=>fetch('http://localhost:5000/totalProducts')
      },
      {
        path: "/order",
        element: <Order />,
        loader: () => CartProductLoader(),
      },
      {
        path: "/order-checkout",
        element: (
          <PrivateRoute>
            <OrderCheckout />
          </PrivateRoute>
        ),
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
