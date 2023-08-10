import { useState } from 'react'
import { NavBar } from './Components/NavBar/Navbar'
import { NewStyleSection } from './Components/NewStyle/NewStyle'
import { Header } from './Components/Header/Header'
import { Bookings } from './Components/Bookings/Bookings'
import './Global.css'
function App() {

  return (
    <>
      <NavBar/>
      <Header/>
      <NewStyleSection/>
      <Bookings/>
    </>
  )
}

export default App
