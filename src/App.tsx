import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Categories from './pages/categories/Categories';
import Product from './pages/product/ProductPage';
import Cart from './pages/cart/Cart';
import AdminPanel from './pages/adminpanel/AdminPanel';
import LayoutContext from './components/core/context/layoutContext/layoutContext';
import MainLayout from './components/core/mainlayout/MainLayout';
import { ReactQueryConfigProvider } from 'react-query';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import Checkout from './pages/checkout/Checkout';

function App() {
  const reactQueryConfig = {
    queries: {
      cacheTime: 0,
      retry: false,
    },
  };
  return (
    <ReactQueryConfigProvider config={reactQueryConfig}>
      <Routes basename="/">
        <Route path="/" element={LayoutContext(MainLayout)}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/categories/:id" element={<Categories />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </ReactQueryConfigProvider>
  );
}

export default App;
