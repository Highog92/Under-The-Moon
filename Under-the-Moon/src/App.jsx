import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './Components/NavBar/Navbar'
import { NewStyleSection } from './Components/NewStyle/NewStyle'
import { Header } from './Components/Header/Header'
import './Global.css'

function App() {

    return (
      <>
        <NavBar />
        <Header />
        <NewStyleSection/>

      </>
    )
  }

export default App
