import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LayoutContext from './components/core/context/layoutContext/layoutContext';
import MainLayout from './components/core/mainlayout/MainLayout';

function App() {
  return (
    <Routes basename="/">
      <Route path="/" element={LayoutContext(MainLayout)}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
