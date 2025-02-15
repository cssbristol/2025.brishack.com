import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import TandC from './pages/TandC.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/terms&conditions" element={<TandC/>}/>
        <Route path="/privacy" element={<Privacy />}/>
      </Routes>      
    </Router>
  </StrictMode>,
)
