import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Product from './pages/ProductPage';
import Cart from './pages/Cart';
import AdminPanel from './pages/AdminPanel';
import LayoutContext from './components/core/context/layoutContext/layoutContext';
import MainLayout from './components/core/mainlayout/MainLayout';
import { ReactQueryConfigProvider } from 'react-query';
import GeneralProfile from './pages/GeneralProfile';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const reactQueryConfig = {
    queries: {
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
          <Route path="/categories" element={<Categories />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<GeneralProfile />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Route>
      </Routes>
    </ReactQueryConfigProvider>
  );
}

export default App;
