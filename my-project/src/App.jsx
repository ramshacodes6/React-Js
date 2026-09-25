import React from 'react'
import Navbar from './Components/navbar' 
import Footer from './Components/footer'
import Home from './Components/home'
import Welcome from './Components/welcome'
import Student from './Components/student'

function App() {
  return (
    <>
      <Welcome name = "Ramsha " />

      <Navbar />
      <Home />

      <Student name = "Aaliya"
              age = {19}
              course = "BCA"
              Id = {45}
       />

      <Footer />
    </>
  )
}

export default App