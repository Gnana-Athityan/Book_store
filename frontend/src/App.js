import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Create from './pages/Create.jsx';
import View from './pages/View.jsx';
import Delete from './pages/Delete.jsx';
import Update from './pages/Update.jsx';
export default function App() {
  return (
    <div>
      <center>
      <h1>Book Management Store</h1></center>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path= '/create'element={<Create/>}/>
        <Route path= '/update/:id'element={<Update/>}/>
        <Route path= '/delete/:id'element={<Delete/>}/>

      </Routes>
    </div>
  )
}
