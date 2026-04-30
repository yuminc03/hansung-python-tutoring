import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Note from './pages/Note';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note/:week" element={<Note />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
