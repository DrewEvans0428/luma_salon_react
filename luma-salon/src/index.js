import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Stylist from './pages/Stylist';

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<Home />}>
        <Route path="Consultation" element={<Consultation />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Services" element={<Services />} />
        <Route path="Stylist" element={<Stylist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
