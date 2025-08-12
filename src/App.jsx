import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Herosection from './components/Herosection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Herosection/>
    
    </>
  )
}

export default App
