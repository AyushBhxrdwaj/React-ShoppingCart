import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className='h-full w-full bg-black'>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>


  )
}

export default App