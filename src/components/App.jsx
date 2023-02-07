import React from 'react';

//Importaciones de CSS
import './App.css';

//Importaciones de Los modulos
import { NavBar } from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './contacto/Contacto';

//Importaciones de React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path='/product/:nombre' element={<ItemDetailContainer/>}/>
        <Route path='/category/:NombreCategoria' element={<ItemListContainer/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
      {/* <ToastContainer/> */}
    </BrowserRouter>
  );
}

export default App;
