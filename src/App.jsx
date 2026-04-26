import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GJSBoarding from './pages/GJSBoarding';
import GJSBoardingGallery from './pages/GJSBoardingGallery';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GJSBoarding />} />
        <Route path="/gallery" element={<GJSBoardingGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
