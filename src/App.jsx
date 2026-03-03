import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GJSBoarding from './pages/GJSBoarding';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <GJSBoarding />
    </BrowserRouter>
  );
}

export default App;
