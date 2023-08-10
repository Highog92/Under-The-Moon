import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './Components/NavBar/Navbar'
import { NewStyleSection } from './Components/NewStyle/NewStyle'
function App() {

    return (
      <>
        <NavBar />
        <NewStyleSection/>

      </>
    )
  }

export default App
