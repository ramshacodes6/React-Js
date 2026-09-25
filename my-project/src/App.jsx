import React from 'react'
import Navbar from './Components/navbar' 
import Footer from './Components/footer'
import Home from './Components/home'
import Welcome from './Components/welcome'

function App() {
  return (
    <>
      <Welcome name = "Ramsha " />
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App