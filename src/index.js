
import{BrowserRouter, Routes, Route} from 'react-router-dom'

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Acai from './pages/acai'
import Gramas from './pages/gramas'
import Signo from './pages/signo'
import Home from './pages/home'
import Salario from './pages/salario'
import Temperatura from './pages/temperatura'
import Paradas from './pages/paradas'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BrowserRouter>

  <Routes>
    <Route   path='/acai' element={<Acai/>} />
    <Route   path='/gramas' element={<Gramas/>} />
    <Route   path='/signo' element={<Signo/>} />
    <Route   path='/' element={<Home/>} />
    <Route   path='/salario' element={<Salario/>} />
    <Route   path='/temperatura' element={<Temperatura/>} />
    <Route   path='/paradas' element={<Paradas/>} />



  </Routes>
  </BrowserRouter>

  </React.StrictMode>


);
