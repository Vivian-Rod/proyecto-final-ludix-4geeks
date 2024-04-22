
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Landing } from './pages/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Reviews } from './pages/Review';
import { Home } from './pages/Home';
import { Games } from './pages/Games';
import { Aboutus } from './pages/Aboutus';
import { Createby } from './pages/Createby';
import { Editusers } from './pages/EditUsers';
import { Nosotros } from './pages/Nosotros';
import { Creadopor } from './pages/Creadopor';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/" />
          <Route element={<Nosotros />} path="/nosotros" />
          <Route element={<Creadopor />} path="/creadopor" />
          <Route element={<Home />} path="/home" />
          <Route element={<Games />} path="/games" />
          <Route element={<Reviews />} path="/Reviews/:gameId"/>
          <Route element={<Aboutus />} path="/aboutus" />
          <Route element={<Createby />} path="/createby" />
          <Route element={<Editusers />} path="/editusers" />

      </Routes>
    </BrowserRouter>
  )
}

export default App;