import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx'
import AddProperty from './pages/AddProperty.jsx'
import EditProperty from './pages/EditProperty.jsx'

function App() {

  return (
    <div className='window-item-center'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProperty />} />
          <Route path="/edit" element={<EditProperty />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
