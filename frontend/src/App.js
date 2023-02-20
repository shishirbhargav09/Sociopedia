import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'

function App() {
  return (
    <BrowserRouter>
<Header/>
    <Routes>
      {/* <Route path='/' element={<Header/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App