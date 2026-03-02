import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Checkout from './Pages/Checkout'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
