import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProgramPage from './pages/ProgramPage'
import AboutPage from './pages/AboutPage'
import CampusPage from './pages/CampusPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'



function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/programs' element={<ProgramPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/campus' element={<CampusPage/>}/>
      <Route path='/testimonials' element={<TestimonialsPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
  
  
    </>
  )
}

export default App
