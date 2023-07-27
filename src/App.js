import React from 'react';


import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// pages

import Home from "./pages/Home";
import Products from "./pages/Products";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Login from './components/Login';

// components

import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from './components/Signup';

// layout

const Layout = ()=> {
  return (
    <div>
      <Header />
      <Outlet /> 
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/products/:id', element: <Products />},
      {path: '/product/:id', element: <ProductDetails />},
      {path: '/search', element: <Search />},
      {path: '/login', element: <Login />},
      {path: '/signup', element: <Signup />},
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App
