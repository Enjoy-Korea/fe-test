import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainList from './pages/MainList';
import ListItemDetail from './pages/ListItemDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainList />} />
      <Route path="/detail/:id" element={<ListItemDetail />} />
    </Routes>
  );
}

export default App;
