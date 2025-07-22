import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import Appointment from './Components/Appointment';

import Home from './Pages/Home';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/aboupage' element={<AboutPage />} />
          <Route path='/projectspage' element={<ProjectsPage />} />
          <Route path='/servicepage' element={<ServicePage />} />
          <Route path='/contactpage' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
