import { useState } from 'react'
import './App.css'
import Header from './componentes/header'
import Productos from './componentes/productos'
import Inicio from './componentes/btn_inicio'
import Footer from './componentes/footer'

function App() {
  const [count, setCount] = useState(0)
  
  return (
   <>
   <Header></Header>
   <Inicio></Inicio>
   <Productos></Productos>
   <Footer></Footer>
   </>
  )
}

export default App
