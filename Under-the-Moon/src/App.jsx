import { useState } from 'react'
import { NavBar } from './Components/NavBar/Navbar'
import { NewStyleSection } from './Components/NewStyle/NewStyle'
import { Header } from './Components/Header/Header'
import { Gallery } from './Components/Gallery/Gallery'
import { Bookings } from './Components/Bookings/Bookings'
import './Global.css'
function App() {

  return (
    <>
      <NavBar />
      <Header />
      <NewStyleSection />
      <Bookings/>
      <Gallery />
    </>
  )
}

export default App
