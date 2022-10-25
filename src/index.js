
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
import Ingresso from './pages/ingresso'
import Familia from './pages/familia'
import NumerosNaturais from './pages/NumerosNaturais'
import Linha from './pages/Linha'
import Retangulo from './pages/retangulo'
import Cafe from './pages/cafe'
import JurosCompostos from './pages/jurosCompostos'


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
    <Route   path='/Ingresso' element={<Ingresso/>} />
    <Route   path='/familia' element={<Familia/>} />
    <Route   path='/NumerosNaturais' element={<NumerosNaturais/>} />
    <Route   path='/Linha' element={<Linha/>} />
    <Route   path='/retangulo' element={<Retangulo/>} />
    <Route   path='/cafe' element={<Cafe/>} />
    <Route   path='/JurosCompostos' element={<JurosCompostos/>} />


  </Routes>
  </BrowserRouter>

  </React.StrictMode>


);
