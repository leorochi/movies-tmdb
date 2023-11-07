import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Filmes from './Componentes/Filmes';
import Filme from './Componentes/Filme';
import NotFound from './Componentes/NotFound';
import { Serie } from './Componentes/Serie';

function App() {


  return (
    <>
     <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Filmes/>}/>
          <Route path='filme/:id' element={<Filme/>}/>
          <Route path='serie' element={<Serie/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
