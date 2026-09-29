import React from 'react'
import Navbar from './Components/navbar' 
import Footer from './Components/footer'
import Home from './Components/home'
import Welcome from './Components/welcome'
import Student from './Components/Student'
import Counter from './Components/Counter'
import Changename from './Components/changeName'

function App() {
  return (
    <>
      <Welcome name = "Ramsha " />

      <Navbar />
      <Home />
      <br></br>

      <Counter />

      <Student 
            name = "Aaliya"
              age = {19}
              course = "BCA"
              Id = {45}
       />
       {/* <Student
        name="Ayesha"
        age={21}
        course="MCA"
        Id={48}
      /> */}

      <Footer />

      <Changename />
    </>
  )
}

export default App;