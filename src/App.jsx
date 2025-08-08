import { Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import Home from './pages/home'
import Food from './pages/Food'
import Grocery from './pages/Grocery'
import Ride from './pages/Ride'
import Cart from "./components/Cart"
import NotFound from "./components/NotFound"
import ScrollToTop from "./components/ScrollToTop"


function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/ride" element={<Ride />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>

    </>
  )
}

export default App
