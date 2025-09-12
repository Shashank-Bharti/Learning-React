import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hi! This Is My First React App</h1>
    <button onClick={()=>console.log("Clicked")}> Click this Button </button>
    </>
  )
}

export default App
