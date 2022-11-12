import { useState } from 'react'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import CartContext from './components/cartContext/CartContext'


function App() {
   // array of objects
  const [cart,setCart] = useState([]);
  return (
    <div className='flex flex-col items-center h-screen'>
      <CartContext.Provider value={[cart,setCart]}>
        <NavBar/>
      </CartContext.Provider>  
      <Footer/>
      
    </div>
  )
}

export default App
