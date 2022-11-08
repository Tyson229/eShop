import { useState } from 'react'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import style from './App.module.scss'
function App() {
  return (
    <div className={style.App}>
        <NavBar/>
        <Footer/>
    </div>
  )
}

export default App
