import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Products from './pages/ProductsPage';
import Cart from './pages/Cart';
import AdminPanel from './pages/AdminPanel';
import LayoutContext from './components/core/context/layoutContext/layoutContext';
import MainLayout from './components/core/mainlayout/MainLayout';

function App() {
  return (
    <Routes basename="/">
      <Route path="/" element={LayoutContext(MainLayout)}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Route>
    </Routes>
  );
}

export default App;
