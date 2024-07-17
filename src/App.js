import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import './tailwind.css';
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
