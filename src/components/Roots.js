import React from 'react'
import {Router, Routes, Route, Switch} from 'react-router-dom'
import { } from "react-router";
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
function Roots() {
    return (
        
         
      <Routes>
      <Route exact path="/" element={<Home />}>
  
</Route>
<Route exact path="/about" element={ <About />}>
 
</Route>
<Route exact path="/contact" element={ <Contact/>}>
 
</Route>
</Routes>
  
          
       
    )
}

export default Roots
