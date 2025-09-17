import React, { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState(color)
  return (

    <div className='flex  w-full h-screen justify-center duration-200' style={{backgroundColor:color}}>
      <h1 className="absolute text-8xl font-medium font-sans text-white text-shadow-xs text-shadow-black place-self-center ">{color[0].toUpperCase()+color.slice(1)}</h1>
      <div className="flex fixed flex-wrap box-border bottom-10 gap-4 border-1 border-gray-500 p-3 rounded-full bg-gray-800 justify-center ">
        <div className=" flex flex-wrap justify-center py-1 px-1 rounded-2xl ">
          <button onClick={() => setColor("red")} className="outline-none font-medium rounded-xl px-6 py-3 text-white" style={{backgroundColor:"red"}}></button>
        </div>
        <div className=" flex flex-wrap justify-center py-1 px-1 rounded-2xl ">
          <button onClick={() => setColor("green")} className="outline-none font-medium rounded-xl px-6 py-3 text-white" style={{backgroundColor:"green"}}></button>
        </div>
        <div className=" flex flex-wrap justify-center py-1 px-1 rounded-2xl ">
          <button onClick={() => setColor("blue")} className="outline-none font-medium rounded-xl px-6 py-3 text-white" style={{backgroundColor:"blue"}}></button>
        </div>
        <div className=" flex flex-wrap justify-center py-1 px-1 rounded-2xl ">
          <button onClick={() => setColor("teal")} className="outline-none font-medium rounded-xl px-6 py-3 text-white" style={{backgroundColor:"teal"}}></button>
        </div>
        <div className=" flex flex-wrap justify-center py-1 px-1 rounded-2xl ">
          <button onClick={() => setColor("orange")} className="outline-none font-medium rounded-xl px-6 py-3 text-white" style={{backgroundColor:"orange"}}></button>
        </div>
        <div className=" flex flex-wrap justify-center py-1 px-1 rounded-2xl ">
          <button onClick={() => setColor("pink")} className="outline-none font-medium rounded-xl px-6 py-3 text-white" style={{backgroundColor:"pink"}}></button>
        </div>
        

      </div>
    </div>
  )
}

export default App
