import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Nopage from './pages/Nopage';
import Home from './pages/Home';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Stylist from './pages/Stylist';

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Consultation" element={<Consultation />} />
        <Route path="Services" element={<Services />} />
        <Route path="Stylist" element={<Stylist />} />
        <Route path="*" element={<Nopage/>} />
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
