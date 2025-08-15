import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Mytechstack from './components/Mytechstack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Herosection/>
   <Mytechstack/>
    
    </>
  )
}

export default App
