
import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCount] = useState(15)
  
  const add = () => {
    if (count >= 20){
     setCount(count)
    }else{
    count = count + 1
    setCount(count )}
  }
  const remove = () => {
    if (count == 0){
     setCount(count)
    }else{
    count = count - 1
    setCount(count )}
  }
  return (
    <>
     <h2>Simple Counter App</h2>
     <h3>Count is : {count}</h3>
     <button onClick={add}>+</button>
     <button onClick={remove}>-</button>
     <h5>{count == 20 || count == 0 ? "You've Reached the Limitation!" : ""}</h5>
    </>
  )
}

export default App
