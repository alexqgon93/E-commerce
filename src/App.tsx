import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Template from './pages/Template';

function App() {
  return (
    <Routes basename="/mtrcycl">
      <Route path="/" component={Template}>
        <Route path="/Dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
