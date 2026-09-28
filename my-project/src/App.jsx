import React from 'react'
import Navbar from './Components/navbar' 
import Footer from './Components/footer'
import Home from './Components/home'
import Welcome from './Components/welcome'
import Student from './Components/Student'
import Counter from './Components/Counter'

function App() {
  return (
    <>
      <Welcome name = "Ramsha " />

      <Navbar />
      <Home />

      <Counter />

      <Student 
            name = "Aaliya"
              age = {19}
              course = "BCA"
              Id = {45}
       />
       <Student
        name="Ayesha"
        age={21}
        course="MCA"
        Id={48}
      />

      <Footer />
    </>
  )
}

export default App;