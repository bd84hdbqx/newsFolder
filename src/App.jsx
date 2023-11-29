import React from 'react'
import Section from './Layout/Main'
import Register from './pages/register'
import Contact from './pages/contact'
import Blog from './pages/blog'
import Home from './pages/home'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="register" element={<Register/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App