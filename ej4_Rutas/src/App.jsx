import { useState } from "react";
import "./App.scss";
import Head from "./Head.jsx";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Inicio from "./inicio.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Head></Head>
        <h1>Inicio</h1>      
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/contactos" element={<h1>Contactos</h1>}></Route>
          <Route path="/nosotros" element={<h1>Nosotros</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
