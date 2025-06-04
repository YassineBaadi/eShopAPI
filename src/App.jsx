import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import Produits from "./pages/produits/Produits"; 
import ProduitDetails from "./pages/details/Details";




function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Produits />} />
        <Route path="/products/:id" element={<ProduitDetails />} />
      </Routes>
    </>
  )
}

export default App
